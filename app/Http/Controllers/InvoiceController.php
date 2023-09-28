<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;
use App\Models\ContactMessage;
use App\Models\Invoice;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ContactMessage $contactMessage)
    {
        $invoices = $contactMessage->invoices()->paginate();

        return Inertia::render('Invoices/Index', [
            'data' => $invoices,
            'contactMessage' => $contactMessage,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactMessage $contactMessage,StoreInvoiceRequest $request)
    {
        $data = $request->validated();
        $data['status'] = 'pending';
        $contactMessage->invoices()->create($data);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactMessage $contactMessage,Invoice $invoice)
    {
        return response()->json([
            'message' => 'ContactMessage retrieved successfully',
            'data' => $invoice,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
}
