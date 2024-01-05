import * as React from "react"
import { AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/core/ui/Select"

export function OrderFilter() {
  return (
    <Select>
      <SelectTrigger className="inline-flex items-center w-[180px]"  style={{ alignSelf: 'baseline'}}>
        <div className="inline-flex items0-center" style={{ alignSelf: 'baseline', height:'25px' }}>
        <AdjustmentsVerticalIcon className="w-5 h-5 text-gray-400 mx-2" style={{ alignSelf: 'baseline'}}/>
        <SelectValue placeholder="Ordenar por" />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ordenar por</SelectLabel>
          <SelectItem value="apple">Mas recientes primero</SelectItem>
          <SelectItem value="apple">Mas antiguos primero</SelectItem>
          <SelectLabel>Agrupar por</SelectLabel>
          <SelectItem value="banana">Estado</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
