"use client" 
import React from 'react';
import SearchBar from './searchBar';
import { SelectFilter } from './selectFilter';
import { OrderFilter } from './orderFilter';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/core/ui/Table';
import Trans from '~/core/ui/Trans';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/core/ui/tabs";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSearch = (query: string) => {
    // Perform the search logic here (e.g., fetch data based on the query)
    console.log('Searching for:', query);
  };

  return (
    <Tabs defaultValue="pedidos-abiertos" className="">
      <div className='tools flex items-center' style={{ paddingBottom: '12px', borderBottom: '1px solid #94A3B8' }}>
        <TabsList style={{ marginRight: '20px', marginLeft: 'auto' }}>
          <TabsTrigger value="pedidos-abiertos">Abiertos</TabsTrigger>
          <TabsTrigger value="pedidos-cerrados">Cerrados</TabsTrigger>
        </TabsList>
        <SearchBar onSearch={handleSearch} />
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
          <SelectFilter />
        </div>
        <OrderFilter />
      </div>

      <div className="rounded-md border" style={{marginTop: '12px'}}>
        <TabsContent value="pedidos-abiertos">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {/* Your content for no orders */}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="pedidos-cerrados">
          Change your password here.
        </TabsContent>
      </div>
    </Tabs>
  );
}
