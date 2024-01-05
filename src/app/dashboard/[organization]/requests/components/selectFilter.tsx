import * as React from "react"
import { FunnelIcon } from '@heroicons/react/24/outline';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/core/ui/Select"

export function SelectFilter() {
  return (
    <Select>
      <SelectTrigger className="inline-flex items-center"  style={{ alignSelf: 'baseline', width: '204px'}}>
        <div className="inline-flex items0-center" style={{ alignSelf: 'baseline', height:'25px' }}>
        <FunnelIcon className="w-5 h-5 text-gray-400 mx-2" style={{ alignSelf: 'baseline'}}/>
        <SelectValue placeholder="Filtros" />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Asignado a</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectLabel>Estado</SelectLabel>
          <SelectItem value="banana">Estado</SelectItem>
          <SelectLabel>ID</SelectLabel>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectLabel>Prioridad</SelectLabel>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectLabel>Fecha de entrega</SelectLabel>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
