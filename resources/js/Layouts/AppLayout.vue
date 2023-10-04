<template>
    <Head :title="title" />
    <div>
        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                <div class="flex h-10 shrink-0 items-center">
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                    <Link :href="item.href" :class="[item.current ? 'bg-transparent !bg-gradient-to-r from-0% !from-[#1047726b] to-100% !to-[#FFFFFF] text-[#104772]' : 'text-gray-700 hover:text-[#104772] hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                        <img :src="item.current?item.selectedIcon:item.icon"/>
                                        {{ item.name }}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Separator -->
                <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <div class="relative flex flex-1"></div>
                    <div class="flex items-center gap-x-4 lg:gap-x-6">


                        <!-- Separator -->
                        <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-1.5">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full bg-gray-50" src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="" />
                                <span class="hidden lg:flex lg:items-center">
                    <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        {{ $page.props.auth.user.name}}
                    </span>
                    <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                            </MenuButton>
                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <Link :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">
                                            {{ item.name }}
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <MenuButton as="button" @click="logout" class="w-full text-left px-3 py-1 text-sm leading-6 text-gray-900">
                                            Sign out
                                        </MenuButton>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-transparent">
                <div class="max-w-10xl py-6 px-5 sm:px-6 lg:px-8 page-header">
                    <slot name="header" />
                    <img class="img-w-in" :src="titleBorderBottom"/>
                </div>
            </header>

            <main class="py-0">
                <div class="px-4 sm:px-6 lg:px-8">
                    <!-- Your content -->
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Head, Link, router } from '@inertiajs/vue3';
import dashboardIcon from '../../images/dashboard.svg';
// import deliveryTruckActiveIcon from '../../images/delivery-truck-active.svg';
// import deliveryTruckIcon from '../../images/delivery-truck.svg';
// import driverIcon from '../../images/XMLID_196_.svg';
import globalIcon from '../../images/global.svg';
// import driverIconSelected from '../../images/XMLID_196_selected.svg';
import titleBorderBottom from '../../images/border-bottom.svg';
// import branchesActive from '../../images/barnches-active.svg';
import dashboardActive from '../../images/dashboard-active.svg';
import clientIcon from '../../images/clients.svg';
import clientActiveIcon from '../../images/clients-active.svg';
// import ordersIcon from '../../images/orders.svg';
// import ordersIconSelected from '../../images/orders-active.svg';

defineProps({
    title: String,
});
const navigation = [
    { name: 'Dashboard', href: route('dashboard'),selectedIcon:dashboardActive, icon: dashboardIcon, current: true },
    { name: 'contact-management', href: route('contact-messages.index'),selectedIcon:clientActiveIcon, icon: clientIcon, current: false },
    { name: 'Users', href: route('users.index'),selectedIcon:clientActiveIcon, icon: clientIcon, current: false },
            ]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
    { name: 'Your profile', href: route('profile.show')},
]

const sidebarOpen = ref(false)

const logout = () => {
    router.post(route('logout'));
};
navigation.forEach((item) => {
    // if (item.href.split('/').length > 3) {
    item.current = window.location.href.includes(item.href.split('/').slice(0, 4).join('/'));
    // }
});
</script>
