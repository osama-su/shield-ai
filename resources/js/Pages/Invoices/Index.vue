<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {ref} from "vue";
import {router} from "@inertiajs/vue3";
import axios, {toFormData} from "axios";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

const props = defineProps({data: Object, contactMessage: Object});

console.log("d", props.data);

const items = ref([
    {
        name: 'View',
        code: 'view'
    },
])
const statusOptions = ref([
    {
        name: "Active",
        code: 'active'
    },
    {
        name: "InActive",
        code: 'inactive'
    }
]);

const invoiceTypes = ref([
    {
        name: "Withdrawal",
        code: 'withdrawal'
    },
    {
        name: "Deposit",
        code: 'deposit'
    }
]);
const message = ref({
    id: 0,
    name: null,
    phone_number: null,
    email: null,
    gender: null,
    country: null,
    service: null,
    notes: null,
    assigned_user_id: null,
    _method: "POST"
});
const errors = ref({
    name: null,
    address: null,
    phone_number: null,
    email: null,
    iban: null,
    swift_code: null,

});

const invoice = ref({
    id: 0,
    contact_message_id: props.contactMessage.id,
    assigned_user_id: props.contactMessage.assigned_user_id,
    type: null,
    status: null,
    amount: null,
    _method: "POST"
});

const currentPage = ref(parseInt(props.data.current_page) - 1);

function changePage(page, path) {
    router.get(path + "?page=" + (page.page + 1));
    return true;
}

const dialogMode = ref("create")

const deleteVisible = ref(false)
const deleteClientData = ref(null)

const sendEmailVisible = ref(false)
const sendEmailData = ref(null)

function closeDeleteModal() {
    deleteClientData.value = null
    deleteVisible.value = false;
}

function closeSendEmailModal() {
    sendEmailData.value = null
    sendEmailVisible.value = false;
}

function deleteClient() {
    axios.delete('contact-messages/' + deleteClientData.value.id).then((res) => {
        deleteClientData.value = null
        deleteVisible.value = false
        router.reload()
    }).catch((err) => {
    })
}

function sendEmail() {
    axios.post('contact-messages/' + email.value.id + '/send-email', email.value).then((res) => {
        sendEmailData.value = null
        sendEmailVisible.value = false
        router.reload()
    }).catch((err) => {
        for (const errKey in err.response.data.errors) {
            errors.value[errKey] = err.response.data.errors[errKey].join('\n');
        }
    })
}

const showVisible = ref(false)
const showData = ref(null)
const visible = ref(false);
const showTooltip = ref(false)
const showTooltip2 = ref(false)

function optionChange(e, id, invoice) {
    if (e.value === 'edit') {
        dialogMode.value = "edit";
        axios.get(`/contact-messages/${id}`).then((res) => {
            message.value = res.data.data
            message.value._method = "PUT"
            visible.value = true;
        });
    } else if (e.value === 'delete') {
        axios.get(`/contact-messages/${id}`).then((res) => {
            deleteClientData.value = res.data.data
            deleteVisible.value = true;
        });
    } else if (e.value === 'view') {
        axios.get(`/${props.contactMessage.id}/invoices/${id}`).then((res) => {
            showData.value = res.data.data
            showVisible.value = true;
        });
    } else if (e.value === 'send-email') {
        axios.get(`/contact-messages/${id}`).then((res) => {
            email.value = res.data.data
            sendEmailVisible.value = true;
        });
    } else if (e.value === 'invoices') {

        router.get(`${id}/invoices`)
    }
}

function closeModal(e) {
    visible.value = false;
    errors.value = {};
    resetClientData()
    dialogMode.value = "create"
}

function onSubmit() {
    console.log(message.value);
    let formData = new FormData();
    for (const clientKey in invoice.value) {
        if (invoice.value[clientKey]) {
            formData.append(clientKey, invoice.value[clientKey]);
        }
    }
    errors.value = {};
    if (dialogMode.value === "edit") {
        console.log(formData)
        axios.post(`/contact-messages/${message.value.id}`, formData).then((res) => {
            router.reload()
            visible.value = false
            resetClientData()
            dialogMode.value = "create"
        }).catch((err) => {
            for (const errKey in err.response.data.errors) {
                errors.value[errKey] = err.response.data.errors[errKey].join('\n');
            }
        });
    } else {

        axios.post(`/${props.contactMessage.id}/invoices`, formData).then((res) => {
            router.reload()
            visible.value = false
            resetClientData()
            dialogMode.value = "create"
        }).catch((err) => {
            for (const errKey in err.response.data.errors) {
                errors.value[errKey] = err.response.data.errors[errKey].join('\n');
            }
        });
    }
}

function resetClientData() {
    message.value = {
        id: 0,
        name: null,
        address: null,
        phone_number: null,
        email: null,
        iban: null,
        swift_code: null,
        commercial_register_id: null,
        status: null,
        notes: null,
        assigned_user_id: null,
        _method: "POST"
    }
}



window.addEventListener('DOMContentLoaded', function() {
    const today = new Date();

    var picker = new Pikaday({
        keyboardInput: false,
        field: document.querySelector('.js-datepicker'),
        format: 'MMM D YYYY',
        theme: 'date-input',
        i18n: {
            previousMonth: "Prev",
            nextMonth: "Next",
            months: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            weekdays: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        }
    });
    picker.setDate(new Date());

    var picker2 = new Pikaday({
        keyboardInput: false,
        field: document.querySelector('.js-datepicker-2'),
        format: 'MMM D YYYY',
        theme: 'date-input',
        i18n: {
            previousMonth: "Prev",
            nextMonth: "Next",
            months: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            weekdays: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        }
    });
    picker2.setDate(new Date());
});

function invoices() {
    return {
        items: [],
        invoiceNumber: 0,
        invoiceDate: '',
        invoiceDueDate: '',

        totalGST: 0,
        netTotal: 0,

        item: {
            id: '',
            name: '',
            qty: 0,
            rate: 0,
            total: 0,
            gst: 18
        },

        billing: {
            name: '',
            address: '',
            extra: ''
        },
        from: {
            name: '',
            address: '',
            extra: ''
        },

        showTooltip: false,
        showTooltip2: false,
        openModal: false,

        addItem() {
            this.items.push({
                id: this.generateUUID(),
                name: this.item.name,
                qty: this.item.qty,
                rate: this.item.rate,
                gst: this.calculateGST(this.item.gst, this.item.rate),
                total: this.item.qty * this.item.rate
            })

            this.itemTotal();
            this.itemTotalGST();

            this.item.id = '';
            this.item.name = '';
            this.item.qty = 0;
            this.item.rate = 0;
            this.item.gst = 18;
            this.item.total = 0;
        },

        deleteItem(uuid) {
            this.items = this.items.filter(item => uuid !== item.id);

            this.itemTotal();
            this.itemTotalGST();
        },

        itemTotal() {
            this.netTotal = this.numberFormat(this.items.length > 0 ? this.items.reduce((result, item) => {
                return result + item.total;
            }, 0) : 0);
        },

        itemTotalGST() {
            this.totalGST =  this.numberFormat(this.items.length > 0 ? this.items.reduce((result, item) => {
                return result + (item.gst * item.qty);
            }, 0) : 0);
        },

        calculateGST(GSTPercentage, itemRate) {
            return this.numberFormat((itemRate - (itemRate * (100 / (100 + GSTPercentage)))).toFixed(2));
        },

        generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        generateInvoiceNumber(minimum, maximum) {
            const randomNumber = Math.floor(Math.random() * (maximum - minimum)) + minimum;
            this.invoiceNumber = '#INV-'+ randomNumber;
        },

        numberFormat(amount) {
            return amount.toLocaleString("en-US", {
                style: "currency",
                currency: "INR"
            });
        },


    }
}

function printInvoice()
{
    console.log(this.$refs)
    var printContents = document.getElementById('js-print-template').innerHTML
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}


</script>

<template>
    <AppLayout title="Clients">
        <template #header>
            <h2 class="font-bold">
                Invoices for {{ contactMessage.name }}
            </h2>
        </template>
        <div class="py-2">
            <div class="max-w-10xl mx-auto sm:px-6 lg:px-8">
                <div class="card p-9">
                    <div
                        class="flex flex-row justify-end mb-5">
                        <Button icon="pi pi-plus-circle" severity="secondary" raised label="Create New Invoice"
                                class="btn btn-active btn-neutral normal-case  !bg-gradient-to-r !from-[#082439] !to-[#104772]"
                                @click="visible = true"/>
                    </div>
                    {{ data.data.length }}
                    <div v-if="data.data.length" class="table-content">
                        <DataTable
                            :value="data.data"
                            tableStyle="min-width: 50rem"
                        >
                            <Column field="id" header="#"></Column>
                            <Column field="type" header="Type"></Column>
                            <Column field="amount" header="Amount">
                            </Column>
                            <Column field="">
                                <template #body="slotProps">
                                    <Dropdown
                                        :options="items"
                                        optionLabel="name"
                                        optionValue="code"
                                        @change="optionChange($event,slotProps.data.id)"
                                        placeholder="Action"
                                        :pt="{
                                                root:'!bg-[#F6F7F7] mx-auto',
                                                input:'!pr-1 !py-1 !text-[#104772] !border-[#656665]',
                                                trigger: ({props, state, context}) =>({
                                                    class: state.focused ?'pi pi-angle-down !text-[#104772] p-0': 'p-0 pi pi-angle-right !text-[#104772]'
                                                }),
                                                wrapper: {class:'!max-h-[200px] !h-full !bg-[#F6F7F7] rounded-lg'},
                                                virtualScroller: {class:'!bg-transparent'},
                                                item: {class:'!text-[#5A6F7E] !text-[12px] !bg-transparent !pr-2 !py-2 !font-bold'}
                                            }"
                                    >
                                        <template #dropdownicon>
                                            <span></span>
                                        </template>
                                    </Dropdown>
                                </template>
                            </Column>
                        </DataTable>
                        <Paginator
                            :rows="data.per_page"
                            :totalRecords="data.total"
                            :first="currentPage * data.per_page"
                            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                            @page="changePage($event,data.path)"></Paginator>
                    </div>
                    <div class="p-6 text-center table-content" v-else>
                        <i class="pi pi-eye-slash !text-7xl mb-3"></i>
                        <p class="text-3xl text-gray-900">No data Found</p>
                    </div>
                </div>
            </div>
        </div>

        <Dialog v-model:visible="visible"
                modal :closable="false"
                :style="{ width: '50vw' }"
                :pt="{
                    header: {class:'!pb-0'}
                }">
            <template #header class="!p-0">
                <div class="flex flex-row justify-center w-full">
                    <p class="text-[18px] text-[#104772] text-center font-bold leading-6">{{
                            !(dialogMode === "create") ? "Edit" : "Add New"
                        }} Invoice</p>
                </div>
            </template>
            <form class="flex flex-col gap-2" enctype="multipart/form-data">
                <div class="flex flex-row flex-nowrap justify-around gap-10">
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Invoice Type</label>
                        <Dropdown
                            v-model="invoice.type"
                            :options="invoiceTypes"
                            option-value="code"
                            optionLabel="name"
                            :class="{ 'p-invalid': errors.type }"
                            placeholder="Choose User"
                            class="w-full md:w-14rem !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                            :pt="{
                                input: {class:'!text-[12px]'},
                                 trigger: ({props, state, context}) =>({
                                    class: state.focused ?'pi pi-chevron-down !text-[#104772]': 'pi pi-chevron-right !text-[#104772]'
                                })
                            }"
                        >
                            <template #dropdownicon>
                                <span></span>
                            </template>
                        </Dropdown>
                        <small class="p-error" id="text-error">{{ errors["type"] || '&nbsp;' }}</small>
                    </div>
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Amount</label>
                        <InputText id="value" v-model="invoice.amount" type="number"
                                   class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                   placeholder="Amount" :class="{ 'p-invalid': errors.amount }"
                                   aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors.amount || '&nbsp;' }}</small>
                    </div>
                </div>


                <div class="flex flex-row justify-center flex-nowrap w-full gap-10">
                    <Button label="Cancel" class="!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none"
                            @click="closeModal"/>
                    <Button type="button" class="!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none"
                            :label='!(dialogMode === "create") ? "Save" : "Add"' @click="onSubmit()"/>
                </div>
            </form>
        </Dialog>

        <Dialog v-model:visible="deleteVisible" modal :closable="false" header="Delete Message"
                :style="{ width: '50vw' }">
            <template #header class="!p-0">
                <div class="flex flex-row justify-center w-full">
                    <p class="text-[18px] text-[#104772] text-center font-bold leading-6">Delete Message</p>
                </div>
            </template>
            <div class="flex flex-col items-center">
                <p class="text-[#D90303] text-[15px] font-extrabold font-sans mb-3.5">Are you sure to Delete the Message
                    ?</p>
                <p class="text-[#5A6F7E] text-[15px] font-light font-sans">{{ deleteClientData?.name }}</p>
            </div>
            <template #footer>
                <div class="flex flex-row justify-center flex-nowrap w-full gap-10">
                    <Button label="Cancel" class="!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none"
                            @click="closeDeleteModal"/>
                    <Button label="Delete" class="!w-[20%] !bg-[#D90303] !text-[#FFFFFF] !border-none"
                            @click="deleteClient()"/>
                </div>
            </template>
        </Dialog>

        <Dialog v-model:visible="showVisible" modal :closable="false"
                :style="{ width: '50vw' }"
                :pt="{

                }">
            <template #header class="!p-0">
                <div class="flex flex-row justify-center w-full">
                    <p class="text-[18px] text-[#104772] text-center font-bold leading-6">Details Customer</p>
                </div>
            </template>

            <div class="border-t-8 border-gray-700 h-2"></div>
            <div
                class="container mx-auto py-6 px-4"
            >
                <div class="flex justify-between">
                    <h2 class="text-2xl font-bold mb-6 pb-2 tracking-wider uppercase">Invoice</h2>
                    <div>
                        <div class="relative mr-4 inline-block">
                            <div
                                class="text-gray-500 cursor-pointer w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 inline-flex items-center justify-center"
                                @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
                                @click="printInvoice()">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer"
                                     width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                    <path
                                        d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"/>
                                    <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"/>
                                    <rect x="7" y="13" width="10" height="8" rx="2"/>
                                </svg>
                            </div>
                            <div v-show="showTooltip"
                                 class="z-40 shadow-lg text-center w-32 block absolute right-0 top-0 p-2 mt-12 rounded-lg bg-gray-800 text-white text-xs">
                                Print this invoice!
                            </div>
                        </div>

                        <div class="relative inline-block">
                            <div
                                class="text-gray-500 cursor-pointer w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 inline-flex items-center justify-center"
                                @mouseenter="showTooltip2 = true" @mouseleave="showTooltip2 = false"
                                @click="window.location.reload()">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh"
                                     width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"/>
                                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"/>
                                </svg>
                            </div>
                            <div v-show="showTooltip2"
                                 class="z-40 shadow-lg text-center w-32 block absolute right-0 top-0 p-2 mt-12 rounded-lg bg-gray-800 text-white text-xs">
                                Reload Page
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex mb-8 justify-between">
                    <div class="w-2/4">
                        <div class="mb-2 md:mb-1 md:flex items-center">
                            <label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Invoice
                                No.</label>
                            <span class="mr-4 inline-block hidden md:block">:</span>
                            <div class="flex-1">
                                <input
                                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    id="inline-full-name" type="text" placeholder="eg. #INV-100001"
                                    x-model="invoiceNumber">
                            </div>
                        </div>

                        <div class="mb-2 md:mb-1 md:flex items-center">
                            <label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Invoice
                                Date</label>
                            <span class="mr-4 inline-block hidden md:block">:</span>
                            <div class="flex-1">
                                <div
                                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                                    type="text" id="datepicker1"
                                    autocomplete="off">{{
                                    new Date(showData.created_at).toDateString()

                                       }}</div>
                            </div>
                        </div>


                    </div>
                    <div>


                    </div>
                </div>

                <div class="flex flex-wrap justify-between mb-8">
                    <div class="w-full md:w-1/3 mb-2 md:mb-0">
                        <label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Bill/Ship
                            To:</label>
                        <div
                            class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Billing company name" x-model="billing.name">
                            {{
                            contactMessage.name
                            }}
                        </div>
                        <div
                            class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Billing company address"
                            x-model="billing.address">

                            {{
                                contactMessage.phone_number
                            }}
                        </div>
                        <input
                            class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Additional info" x-model="billing.extra">
                    </div>
                    <div class="w-full md:w-1/3">
                        <label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">From:</label>
                        <input
                            class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Your company name" x-model="from.name">

                        <input
                            class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Your company address" x-model="from.address">

                        <input
                            class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name" type="text" placeholder="Additional info" x-model="from.extra">
                    </div>
                </div>

                <div class="flex -mx-1 border-b py-2 items-start">
                    <div class="flex-1 px-1">
                        <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Description</p>
                    </div>

                    <div class="px-1 w-20 text-right">
                        <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Units</p>
                    </div>

                    <div class="px-1 w-32 text-right">
                        <p class="leading-none">
                            <span
                                class="block uppercase tracking-wide text-sm font-bold text-gray-800">Type</span>
<!--                            <span class="font-medium text-xs text-gray-500">(Incl. GST)</span>-->

                        </p>
                    </div>

                    <div class="px-1 w-32 text-right">
                        <p class="leading-none">
                            <span class="block uppercase tracking-wide text-sm font-bold text-gray-800">Amount</span>
                            <span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
                        </p>
                    </div>


                </div>
                <div >
                    <div class="flex -mx-1 py-2 border-b">
                        <div class="flex-1 px-1">
                            <p class="text-gray-800" >{{showData.name}}</p>
                        </div>

                        <div class="px-1 w-20 text-right">
                            <p class="text-gray-800" x-text="invoice.qty"></p>
                        </div>

                        <div class="px-1 w-32 text-right">
                            <p class="text-gray-800" x-text="numberFormat(invoice.rate)">
                                {{showData.type}}
                            </p>
                        </div>

                        <div class="px-1 w-32 text-right">
                            <p class="text-gray-800">
                                {{showData.amount}}
                            </p>
                        </div>

                    </div>
                </div>



                <div class="py-2 ml-auto mt-5 w-full sm:w-2/4 lg:w-1/4">
                    <div class="flex justify-between mb-3">
                        <div class="text-gray-800 text-right flex-1">Total incl. GST</div>
                        <div class="text-right w-40">
                            <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                        </div>
                    </div>
                    <div class="flex justify-between mb-4">
                        <div class="text-sm text-gray-600 text-right flex-1">GST(18%) incl. in Total</div>
                        <div class="text-right w-40">
                            <div class="text-sm text-gray-600" x-html="totalGST"></div>
                        </div>
                    </div>
                </div>

                <!-- Print Template -->
                <div id="js-print-template" x-ref="printTemplate" class="hidden">
                    <div class="mb-8 flex justify-between">
                        <div>
                            <h2 class="text-3xl font-bold mb-6 pb-2 tracking-wider uppercase">Invoice</h2>

                            <div class="mb-1 flex items-center">
                                <label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">Invoice
                                    No.</label>
                                <span class="mr-4 inline-block">:</span>
                                <div x-text="invoiceNumber"></div>
                            </div>

                            <div class="mb-1 flex items-center">
                                <label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">Invoice
                                    Date</label>
                                <span class="mr-4 inline-block">:</span>
                                <div x-text="invoiceDate">{{new Date(showData.created_at).toDateString()}}</div>
                            </div>

                            <div class="mb-1 flex items-center">
                                <label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">Due
                                    date</label>
                                <span class="mr-4 inline-block">:</span>
                                <div x-text="invoiceDueDate"></div>
                            </div>
                        </div>
                        <div class="pr-5">
                            <div class="w-32 h-32 mb-1 overflow-hidden">
                                <img id="image2" class="object-cover w-20 h-20"/>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between mb-10">
                        <div class="w-1/2">
                            <label class="text-gray-800 block mb-2 font-bold text-xs uppercase tracking-wide">Bill/Ship
                                To:</label>
                            <div>
                                <div x-text="billing.name"></div>
                                <div x-text="billing.address"></div>
                                <div x-text="billing.extra"></div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <label
                                class="text-gray-800 block mb-2 font-bold text-xs uppercase tracking-wide">From:</label>
                            <div>
                                <div x-text="from.name"></div>
                                <div x-text="from.address"></div>
                                <div x-text="from.extra"></div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-1 border-b py-2 items-start">
                        <div class="flex-1 px-1">
                            <p class="text-gray-600 uppercase tracking-wide text-xs font-bold">Description</p>
                        </div>

                        <div class="px-1 w-32 text-right">
                            <p class="text-gray-600 uppercase tracking-wide text-xs font-bold">Units</p>
                        </div>

                        <div class="px-1 w-32 text-right">
                            <p class="leading-none">
                                <span
                                    class="block uppercase tracking-wide text-xs font-bold text-gray-600">Unit Price</span>
                                <span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
                            </p>
                        </div>

                        <div class="px-1 w-32 text-right">
                            <p class="leading-none">
                                <span
                                    class="block uppercase tracking-wide text-xs font-bold text-gray-600">Amount</span>
                                <span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
                            </p>
                        </div>
                    </div>
                    <template x-for="invoice in items" :key="invoice.id">
                        <div class="flex flex-wrap -mx-1 py-2 border-b">
                            <div class="flex-1 px-1">
                                <p class="text-gray-800" x-text="invoice.name"></p>
                            </div>

                            <div class="px-1 w-32 text-right">
                                <p class="text-gray-800" x-text="invoice.qty"></p>
                            </div>

                            <div class="px-1 w-32 text-right">
                                <p class="text-gray-800" x-text="numberFormat(invoice.rate)"></p>
                            </div>

                            <div class="px-1 w-32 text-right">
                                <p class="text-gray-800" x-text="numberFormat(invoice.total)"></p>
                            </div>
                        </div>
                    </template>

                    <div class="py-2 ml-auto mt-20" style="width: 320px">
                        <div class="flex justify-between mb-3">
                            <div class="text-gray-800 text-right flex-1">Total incl. GST</div>
                            <div class="text-right w-40">
                                <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                            </div>
                        </div>
                        <div class="flex justify-between mb-4">
                            <div class="text-sm text-gray-600 text-right flex-1">GST(18%) incl. in Total</div>
                            <div class="text-right w-40">
                                <div class="text-sm text-gray-600" x-html="totalGST"></div>
                            </div>
                        </div>

                        <div class="py-2 border-t border-b">
                            <div class="flex justify-between">
                                <div class="text-xl text-gray-600 text-right flex-1">Amount due</div>
                                <div class="text-right w-40">
                                    <div class="text-xl text-gray-800 font-bold" x-html="netTotal"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Print Template -->
            </div>

            <template #footer>
                <div class="flex flex-row justify-center flex-nowrap w-full gap-10">
                    <Button type="button" class="!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none"
                            label='Done' @click="showVisible = false"/>
                </div>
            </template>
        </Dialog>

        <Dialog v-model:visible="sendEmailVisible"
                modal :closable="false"
                :style="{ width: '50vw' }"
                :pt="{
                    header: {class:'!pb-0'}
                }">
            <template #header class="!p-0">
                <div class="flex flex-row justify-center w-full">
                    <p class="text-[18px] text-[#104772] text-center font-bold leading-6">
                        Send Email
                    </p>
                </div>
            </template>
            <form class="flex flex-col gap-2" enctype="multipart/form-data">
                <div class="flex flex-row flex-nowrap justify-around gap-10">
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Name</label>
                        <InputText id="value" v-model="email.name" type="text"
                                   class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                   placeholder="Company Name" :class="{ 'p-invalid': errors.name }"
                                   aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors.name || '&nbsp;' }}</small>
                    </div>

                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">E-mail</label>
                        <InputText id="value" v-model="email.email" type="text"
                                   class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                   placeholder="E-mail" :class="{ 'p-invalid': errors['email'] }"
                                   aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors["email"] || '&nbsp;' }}</small>
                    </div>

                </div>

                <!--                assign to user and notes -->
                <div class="flex flex-row flex-nowrap justify-around gap-10">
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Subject</label>
                        <InputText id="value" v-model="email.subject" type="text"
                                   class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                   placeholder="Subject" :class="{ 'p-invalid': errors['subject'] }"
                                   aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors["subject"] || '&nbsp;' }}</small>
                    </div>
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Message</label>
                        <Textarea id="value" v-model="email.message" type="text"
                                  class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                  placeholder="Message Body" :class="{ 'p-invalid': errors.message }"
                                  aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors.message || '&nbsp;' }}</small>
                    </div>


                </div>

                <div class="flex flex-row justify-center flex-nowrap w-full gap-10">
                    <Button label="Cancel" class="!w-[20%] !bg-[#F0C0C0] !text-[#D90303] !border-none"
                            @click="closeSendEmailModal"/>
                    <Button type="button" class="!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none"
                            :label='"Send"' @click="sendEmail()"/>
                </div>
            </form>
        </Dialog>

    </AppLayout>
</template>

<style scoped>
</style>
