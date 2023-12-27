"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id: string
  title: string
  status: "pending" | "processing" | "success" | "failed"
  assignedTo: string // Anadir arrays de usuarios asignados al pedido
  priority: "High" | "Medium" | "Low"
  createdDate: Date
  dueDate: Date
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned to",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "createdDate",
    header: "Created",
  },
  {
    accessorKey: "dueDate",
    header: "Due date",
  },
  {
    accessorKey: "actions",
    header: "",
  },
]
