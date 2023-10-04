<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {ref} from "vue";
import {router} from "@inertiajs/vue3";
import axios from "axios";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

const props = defineProps({data: Object, users: Array});

console.log(props.data);

const items = ref([
    {
        name: 'View',
        code: 'view'
    },
    {
        name: "Edit",
        code: "edit"
    },
    {
        name: "Delete",
        code: 'delete'
    }
])
const statusOptions = ref([
    {
        name: "Active",
        code: 'active'
    },
    {
        name: "Pending",
        code: 'pending'
    }
]);
const user = ref({
    id: 0,
    name: null,
    is_admin: null,
    status: null,
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

const email = ref({
    name: null,
    email: null,
    subject: null,
    message: null,
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

const showVisible = ref(false)
const showData = ref(null)
const visible = ref(false);

function optionChange(e, id) {
    if (e.value === 'edit') {
        dialogMode.value = "edit";
        axios.get(`/users/${id}`).then((res) => {
            user.value = res.data.data
            user.value._method = "PUT"
            visible.value = true;
        });
    } else if (e.value === 'delete') {
        axios.get(`/users/${id}`).then((res) => {
            deleteClientData.value = res.data.data
            deleteVisible.value = true;
        });
    } else if (e.value === 'view') {
        axios.get(`/users/${id}`).then((res) => {
            showData.value = res.data.data
            showVisible.value = true;
        });
    } else if (e.value === 'send-email') {
        axios.get(`/users/${id}`).then((res) => {
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
    console.log(user.value);
    let formData = new FormData();
    for (const clientKey in user.value) {
        if (user.value[clientKey]) {
            formData.append(clientKey, user.value[clientKey]);
        }
    }
    errors.value = {};
    if (dialogMode.value === "edit") {
        console.log(formData)
        axios.post(`/users/${user.value.id}`, formData).then((res) => {
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

        axios.post('/users', formData).then((res) => {
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
    user.value = {
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

</script>

<template>
    <AppLayout title="Clients">
        <template #header>
            <h2 class="font-bold">
                Contacts
            </h2>
        </template>
        <div class="py-2">
            <div class="max-w-10xl mx-auto sm:px-6 lg:px-8">
                <div class="card p-9">
                    <div v-if="$page.props.auth.user.is_admin"
                         class="flex flex-row justify-end mb-5">
                        <Button icon="pi pi-plus-circle" severity="secondary" raised label="Add New Message"
                                class="btn btn-active btn-neutral normal-case  !bg-gradient-to-r !from-[#082439] !to-[#104772]"
                                @click="visible = true"/>
                    </div>
                    <div v-if="data.data.length" class="table-content">
                        <DataTable
                            :value="data.data"
                            tableStyle="min-width: 50rem"
                        >
                            <Column field="id" header="#"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="email" header="Email"></Column>
                            <Column field="is_admin" header="Is Admin">
                                <template #body="slotProps">
                                    <p :class="slotProps.data.is_admin === 1?'text-[#46CB00]':'text-[#FF0000]'">{{ slotProps.data.is_admin === 1?'Admin':'User' }}</p>
                                </template>
                            </Column>

                            <Column field="status" header="Status">
                                <template #body="slotProps">
                                    <p :class="slotProps.data.status === 'active'?'text-[#46CB00]':'text-[#FF0000]'">{{ slotProps.data.status === 'active'?'Active':'Pending' }}</p>
                                </template>
                            </Column>
                            <!--                            <Column header="Status">-->
                            <!--                                <template #body="slotProps">-->
                            <!--                                    <p :class="slotProps.data.status === 'active'?'text-[#46CB00]':'text-[#FF0000]'">{{ slotProps.data.status === 'active'?'Active':'InActive' }}</p>-->
                            <!--                                </template>-->
                            <!--                            </Column>-->

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
                        }} User</p>
                </div>
            </template>
            <form class="flex flex-col gap-2" enctype="multipart/form-data">
                <div class="flex flex-row flex-nowrap justify-around gap-10">
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Name</label>
                        <InputText id="value" v-model="user.name" type="text"
                                   class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                   placeholder="Company Name" :class="{ 'p-invalid': errors.name }"
                                   aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors.name || '&nbsp;' }}</small>
                    </div>
                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Is Admin</label>
                        <Dropdown
                            v-model="user.is_admin"
                            :options="[{name:'Admin',code:1},{name:'User',code:0}]"
                            option-value="code"
                            optionLabel="name"
                            :class="{ 'p-invalid': errors.is_admin }"
                            placeholder="Choose Admin"
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
                        <small class="p-error" id="text-error">{{ errors["is_admin"] || '&nbsp;' }}</small>

                       </div>
                </div>

                <div class="flex flex-row flex-nowrap justify-around gap-10">

                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">E-mail</label>
                        <InputText id="value" v-model="user.email" type="text"
                                   class="w-full !text-[12px] !h-[50%] !bg-neutral-100 !text-neutral-600"
                                   placeholder="E-mail" :class="{ 'p-invalid': errors['email'] }"
                                   aria-describedby="text-error"/>
                        <small class="p-error" id="text-error">{{ errors["email"] || '&nbsp;' }}</small>
                    </div>

                    <div class="flex flex-col w-full max-w-lg mx-1">
                        <label for="value" class="!text-[15px] !text-[#104772]">Status</label>
                        <Dropdown
                            v-model="user.status"
                            :options="[{name:'Active',code:'active'},{name:'Pending',code:'pending'}]"
                            option-value="code"
                            optionLabel="name"
                            :class="{ 'p-invalid': errors.status }"
                            placeholder="Choose Status"
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
                        <small class="p-error" id="text-error">{{ errors["status"] || '&nbsp;' }}</small>
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
                    <p class="text-[18px] text-[#104772] text-center font-bold leading-6">Details User</p>
                </div>
            </template>
            <div class="px-[10%] flex flex-col gap-4">
                <div class="w-[100%] mx-auto">
                    <div class="grid grid-cols-2">
                        <p class="text-[#104772] text-[15px]"><span class="text-[#104772] font-semibold">Name : </span>{{
                                showData?.name
                            }}</p>
                        <p class="text-[#104772] text-[15px]"><span class="text-[#104772] font-semibold">Is Admin : </span>{{
                                showData?.is_admin === 1 ? 'Admin' : 'User'
                            }}</p>
                    </div>
                    <div class="grid grid-cols-2">
                        <p class="text-[#104772] text-[15px]"><span
                            class="text-[#104772] font-semibold">Gender : </span>{{ showData?.status }}</p>
                        <p class="text-[#104772] text-[15px]"><span
                            class="text-[#104772] font-semibold">E-Mail : </span>{{ showData?.email }}</p>
                    </div>

                    <!--                    <div class="grid grid-cols-2">-->
                    <!--                        <p class="text-[#104772] text-[15px]"><span class="text-[#104772] font-semibold">No Orders : </span>{{ "12213" }}</p>-->
                    <!--                        <p class="text-[#104772] text-[15px]"><span class="text-[#104772] font-semibold">Swift Code : </span>{{ showData?.swift_code }}</p>-->
                    <!--                    </div>-->
                    <!--                    <div class="grid grid-cols-2">-->
                    <!--                        <p class="text-[#104772] text-[15px]"><span class="text-[#104772] font-semibold">Iban : </span>{{ showData?.iban }}</p>-->
                    <!--                        <p class="text-[#104772] text-[15px]"><span class="text-[#104772] font-semibold">Withdrawable Profits : </span>{{ "222.322.00 SAR" }}</p>-->
                    <!--                    </div>-->

                </div>
            </div>
            <template #footer>
                <div class="flex flex-row justify-center flex-nowrap w-full gap-10">
                    <Button type="button" class="!w-[20%] !bg-gradient-to-r !from-[#082439] !to-[#104772] !border-none"
                            label='Done' @click="showVisible = false"/>
                </div>
            </template>
        </Dialog>


    </AppLayout>
</template>

<style scoped>

</style>
