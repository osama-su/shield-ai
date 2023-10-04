<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import Vue3Apexcharts from "vue3-apexcharts/src/vue3-apexcharts.js";
import avatarPlaceholderImage from '../../images/avatarplaceholder.png';
import {ref} from "vue";
import Column from "primevue/column";
import DataTable from "primevue/datatable";


const chartData = ref({
    series: [{
        name: 'Sales',
        data: [2.3, 3.1, 2.0, 3.1, 4.0, 3.6, 3.2,3.2,3.2,]
    }],
    chartOptions: {
        title:{
            text: 'Average Daily Sales',
            style: {
                fontSize:  '15px',
                fontWeight:  'normal',
                color:  '#C0C6CA'
            },
        },
        legend: {
            show: false
        },
        fill: {
            // colors: ['#082439','#104772' ],
            type: 'gradient',
            gradient: {
                type: "vertical",
                colorStops: [
                    {
                        offset: 0,
                        color: "#104772",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#082439",
                        opacity: 1
                    },
                ]
            }
        },
        chart: {
            type: 'bar',
            toolbar:{
                show: false,
            },
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                borderRadius: 5,
                borderRadiusOnAllStackedSeries: true,
                startingShape: "rounded",
                endingShape: "rounded",
            }
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat", "Sun", "Mon",],
            tooltip: {
                enabled: false,
            },
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            }
        },
        yaxis: {
            show:false,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        }
    },
});
const chartLineData = ref({
    series: [
        {
            name: 'Sales',
            data: ["5k $", "2k $", "3k $", "9k $", "3k $", ]
        },
        {
            name: 'Sales',
            data: ["10k $", "4k $", "6k $", "18k $", "6k $", ]
        },
    ],
    chartOptions: {
        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        title:{
            text: 'Total Sales',
            style: {
                fontSize:  '15px',
                fontWeight:  'normal',
                color:  '#C0C6CA'
            },
        },
        legend: {
            show: false
        },
        fill: {
            colors: ['#feebaf','#baffdc' ],

        },
        chart: {
            type: 'bar',
            toolbar:{
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: ['#104772','#104772','#104772','#104772','#104772','#104772'],
                    fontSize: '8px',
                },
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            }
        },
        yaxis: {
            show:true,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                style: {
                    colors: ['#104772','#104772','#104772','#104772','#104772','#104772'],
                    fontSize: '8px',
                },
                formatter: function(val, index) {
                    return val+"k $";
                }
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        }
    },
});
const chartWalletLineData = ref({
    series: [
        {
            name: 'Sales',
            data: ["5k $", "2k $", "3k $", "9k $", "3k $", ]
        },
        {
            name: 'Sales',
            data: ["10k $", "4k $", "6k $", "18k $", "6k $", ]
        },
    ],
    chartOptions: {
        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
        title:{
            text: 'Wallet Balance',
            style: {
                fontSize:  '15px',
                fontWeight:  'normal',
                color:  '#C0C6CA'
            },
        },
        legend: {
            show: false
        },
        fill: {
            colors: ['#feebaf','#baffdc' ],

        },
        chart: {
            type: 'bar',
            toolbar:{
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: ['#104772','#104772','#104772','#104772','#104772','#104772'],
                    fontSize: '8px',
                },
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            }
        },
        yaxis: {
            show:true,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                style: {
                    colors: ['#104772','#104772','#104772','#104772','#104772','#104772'],
                    fontSize: '8px',
                },
                formatter: function(val, index) {
                    return val+"k $";
                }
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        }
    },
});
const chartOrderData = ref({
    series: [{
        name: 'Sales',
        data: [2.3, 3.1, 2.0, 3.1, 4.0, 3.6, 3.2,3.2,3.2,4.0, 3.6, 3.2,]
    }],
    chartOptions: {
        title:{
            text: 'Total Orders Per years',
            style: {
                fontSize:  '15px',
                fontWeight:  'normal',
                color:  '#C0C6CA'
            },
        },
        legend: {
            show: false
        },
        fill: {
            colors: ['#082439','#104772' ],
            type: 'gradient',
            gradient: {
                type: "vertical",
                colorStops: [
                    {
                        offset: 0,
                        color: "#104772",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#082439",
                        opacity: 1
                    },
                ]
            }
        },
        chart: {
            type: 'bar',
            toolbar:{
                show: false,
            },
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                borderRadius: 5,
                borderRadiusOnAllStackedSeries: true,
                startingShape: "rounded",
                endingShape: "rounded",
            }
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct","Nov", "Dec"],
            tooltip: {
                enabled: false,
            },
            labels: {
                show: true,
                style: {
                    colors: ['#104772','#104772','#104772','#104772','#104772','#104772','#104772','#104772','#104772','#104772','#104772','#104772'],
                    fontSize: '12px',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            }
        },
        yaxis: {
            show:false,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        }
    },
});
const chartDonutData = ref({
    series: [100, 50, 50],
    chartOptions: {
        labels: ['Expected Profit', 'Retained Profit', 'Withdrawable Profits'],
        legend: {
            show: false
        },
        fill: {
            colors: ['#104772','#C0C6CA','#E6EBF0' ],
        },
        dataLabels: {
            enabled: false,
        },
    },
});
const chartPieData = ref({
    series: [700, 300,],
    chartOptions: {
        labels: ['Drivers Available', 'Unavailable'],
        legend: {
            show: false
        },
        fill: {
            colors: ['#104772','#C0C6CA'],
        },
        dataLabels: {
            enabled: false,
        },
    },
});

const data = ref([
    {
        client: "Meats.Exchnage",
        location: "Jeddah, Saoudi arabia",
        total_orders: 255,
        increase:true
    },
    {
        client: "Meats.Exchnage",
        location: "Jeddah, Saoudi arabia",
        total_orders: 255,
        increase:true
    },
    {
        client: "Meats.Exchnage",
        location: "Jeddah, Saoudi arabia",
        total_orders: 255,
        increase:false
    },
    {
        client: "Meats.Exchnage",
        location: "Jeddah, Saoudi arabia",
        total_orders: 255,
        increase:true
    },
    {
        client: "Meats.Exchnage",
        location: "Jeddah, Saoudi arabia",
        total_orders: 255,
        increase:true
    },
])
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>
        <div class="py-2">
            <div class="max-w-10xl mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-4 gap-4">
                    <div class="bg-white overflow-hidden sm:rounded-lg">
                        <div class="bg-white light:bg-gray-800 overflow-hidden px-2 flex flex-col justify-between h-full">
                            <div>
                                <p class="text-[#104772] text-[18px] my-2 font-bold">2.6 k</p>
                                <p class="text-[#C0C6CA] text-[15px]">New Drivers This Month</p>
                            </div>
                            <AvatarGroup class="mb-5">
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar :image="avatarPlaceholderImage" size="normal" shape="circle" />
                                <Avatar label="+2" shape="circle" size="normal" style="background-color: '#9c27b0', color: '#ffffff'" />
                            </AvatarGroup>

                        </div>
                    </div>
                    <div class="bg-white overflow-hidden sm:rounded-lg">
                        <div class="bg-white light:bg-gray-800 overflow-hidden px-2">
                            <p class="text-[#104772] text-[18px] my-2 font-bold"><sup class="text-[10px]">SAR</sup> 22.5 k
                                <Badge severity="success" :pt="{root:{class:'!bg-[#C7EFB2] ml-1'}}">
                                    <template #default>
                                        <p class="text-[10px] text-[#85D83A] ">12 % <i class="pi pi-arrow-up !text-[10px]"></i></p>
                                    </template>
                                </Badge>
                            </p>
                            <Vue3Apexcharts
                                type="bar"
                                height="150"
                                width="100%"
                                :options="chartData.chartOptions"
                                :series="chartData.series"
                            ></Vue3Apexcharts>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden sm:rounded-lg">
                        <div class="bg-white light:bg-gray-800 overflow-hidden px-2">
                            <p class="text-[#104772] text-[18px] my-2 font-bold"><sup class="text-[10px]">SAR</sup> 22343.22.00 k
                                <Badge severity="success" :pt="{root:{class:'!bg-[#C7EFB2] ml-1'}}">
                                    <template #default>
                                        <p class="text-[10px] text-[#85D83A] ">12 % <i class="pi pi-arrow-up !text-[10px]"></i></p>
                                    </template>
                                </Badge>
                            </p>
                            <Vue3Apexcharts
                                type="area"
                                height="150"
                                width="100%"
                                :options="chartLineData.chartOptions"
                                :series="chartLineData.series"
                            ></Vue3Apexcharts>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden sm:rounded-lg">
                        <div class="bg-white light:bg-gray-800 overflow-hidden px-2">
                            <p class="text-[#104772] text-[18px] my-2 font-bold"><sup class="text-[10px]">SAR</sup> 12.63452.00 k
                                <Badge severity="danger" :pt="{root:{class:'!bg-[#edb2b3] ml-1'}}">
                                    <template #default>
                                        <p class="text-[10px] text-[#e04d48] ">8 % <i class="pi pi-arrow-down !text-[10px]"></i></p>
                                    </template>
                                </Badge>
                            </p>
                            <Vue3Apexcharts
                                type="area"
                                height="150"
                                width="100%"
                                :options="chartWalletLineData.chartOptions"
                                :series="chartWalletLineData.series"
                            ></Vue3Apexcharts>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6 my-5">
                    <div class="bg-white overflow-hidden col-span-2 sm:rounded-lg">
                        <div class="bg-white light:bg-gray-800 overflow-hidden px-2">
                            <p class="text-[#104772] text-[18px] pl-3 my-2 font-bold"> 7.4 k  Orders
                                <Badge severity="success" :pt="{root:{class:'!bg-[#C7EFB2] ml-1'}}">
                                    <template #default>
                                        <p class="text-[10px] text-[#85D83A] ">12 % <i class="pi pi-arrow-up !text-[10px]"></i></p>
                                    </template>
                                </Badge>
                            </p>
                            <Vue3Apexcharts
                                type="bar"
                                height="250"
                                width="100%"
                                :options="chartOrderData.chartOptions"
                                :series="chartOrderData.series"
                            ></Vue3Apexcharts>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden col-span-1 sm:rounded-lg">
                        <div class="bg-white light:bg-gray-800 overflow-hidden px-2">
                            <p class="text-[#104772] text-[18px] pl-4 mt-2 font-bold flex flex-row items-center"> <span>Profit</span>
                                <Badge severity="success" :pt="{root:{class:'!bg-[#C7EFB2] ml-1'}}">
                                    <template #default>
                                        <p class="text-[10px] text-[#85D83A] ">12 % <i class="pi pi-arrow-up !text-[10px]"></i></p>
                                    </template>
                                </Badge>
                            </p>
                            <div class="grid grid-cols-3">
                                <div class="col-span-1">
                                    <div class="flex flex-col justify-evenly pl-4 h-full ">
                                        <div class="">
                                            <p class="text-[#5A6F7E] text-[12px]"><Badge :pt="{root:{class:'!bg-[#104772] mr-1'}}"></Badge>Expected Profit</p>
                                            <p class="text-[#104772] text-[12px]">222.322.00 SAR</p>
                                        </div>
                                        <div class="">
                                            <p class="text-[#5A6F7E] text-[12px]"><Badge :pt="{root:{class:'!bg-[#C1C6C9] mr-1'}}"></Badge>Retained Profit</p>
                                            <p class="text-[#104772] text-[12px]">222.322.00 SAR</p>
                                        </div>
                                        <div class="">
                                            <p class="text-[#5A6F7E] text-[12px]"><Badge :pt="{root:{class:'!bg-[#E7EBF0] mr-1'}}"></Badge>Withdrawable Profits</p>
                                            <p class="text-[#104772] text-[12px]">222.322.00 SAR</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-2 ">
                                    <Vue3Apexcharts
                                        type="donut"
                                        height="250"
                                        width="100%"
                                        :options="chartDonutData.chartOptions"
                                        :series="chartDonutData.series"
                                    ></Vue3Apexcharts>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="bg-white overflow-hidden col-span-1 sm:rounded-lg">
                        <p class="text-[#104772] text-[18px] pl-6 mt-2 font-bold "> 30 K</p>
                        <p class="text-[#C0C6CA] text-[15px] pl-6 mt-2 font-bold ">Drivers</p>
                        <Vue3Apexcharts
                            type="pie"
                            height="250"
                            width="100%"
                            :options="chartPieData.chartOptions"
                            :series="chartPieData.series"
                        ></Vue3Apexcharts>
                        <div class="flex flex-row justify-center gap-8 mb-4">
                            <p class="text-[12px] text-[#104772]"><Badge :pt="{root:{class:'!bg-[#104772] mr-2 !rounded-none'}}"></Badge>Drivers Available</p>
                            <p class="text-[12px] text-[#C0C6CA]"><Badge :pt="{root:{class:'!bg-[#C0C6CA] mr-2 !rounded-none'}}"></Badge>Unavailable</p>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden col-span-2 sm:rounded-lg">
                        <p class="text-[#104772] text-[18px] pl-6 mt-2 mb-6 font-bold ">Top Clients</p>
                        <div class="table-content px-6" id="top-clients-table">
                            <DataTable :value="data" tableStyle="min-width: 50rem">
                                <Column field="client" header="Client"></Column>
                                <Column field="location" header="Location"></Column>
                                <Column  header="Total Orders" >
                                    <template #body="slotProps">
                                        <p class="flex flex-row items-center"> <span>{{ slotProps.data.total_orders+" Orders" }}</span>
                                            <Badge v-if="slotProps.data.increase" severity="success" :pt="{root:{class:'!bg-[#C7EFB2] ml-2'}}">
                                                <template #default>
                                                    <p class="text-[10px] text-[#85D83A] ">12 % <i class="pi pi-arrow-up !text-[10px]"></i></p>
                                                </template>
                                            </Badge>
                                            <Badge v-else severity="danger" :pt="{root:{class:'!bg-[#edb2b3] ml-2'}}">
                                                <template #default>
                                                    <p class="text-[10px] text-[#e04d48] ">12 % <i class="pi pi-arrow-down !text-[10px]"></i></p>
                                                </template>
                                            </Badge>
                                        </p>
                                    </template>
                                </Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style>
#top-clients-table .p-datatable-table td{
    text-align: left !important;
    color: #A0ADB6 !important;
}
#top-clients-table .p-datatable .p-column-header-content {
    justify-content: left !important;
}
#top-clients-table .p-datatable .p-datatable-tbody > tr > td{
    padding: .5rem !important;
    font-size: 12px !important;
    color: #5A6F7E !important
}
#top-clients-table .p-datatable-table th{
    text-align: left !important;
    padding: .5rem !important;
}
#top-clients-table .p-datatable .p-column-header-content {
    justify-content: left !important;
}
</style>
