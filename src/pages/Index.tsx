import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import FilterChip from "@/components/FilterChip";
import LoadCard from "@/components/LoadCard";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const mockCargas = [
  { id: "88291", dateTime: "Hoje, 14:30", origemCidade: "Santos", origemEstado: "SP", destinoCidade: "Curitiba", destinoEstado: "PR", tipoVeiculo: "Carreta LS", distancia: "450 km", pagamento: "R$ 4.250" },
  { id: "88290", dateTime: "Hoje, 13:15", origemCidade: "Campinas", origemEstado: "SP", destinoCidade: "Porto Alegre", destinoEstado: "RS", tipoVeiculo: "Truck", distancia: "1.120 km", pagamento: "R$ 7.800" },
  { id: "88289", dateTime: "Hoje, 12:00", origemCidade: "São Paulo", origemEstado: "SP", destinoCidade: "Caxias do Sul", destinoEstado: "RS", tipoVeiculo: "Carreta", distancia: "1.050 km", pagamento: "R$ 6.900" },
  { id: "88288", dateTime: "Hoje, 11:40", origemCidade: "Guarulhos", origemEstado: "SP", destinoCidade: "Florianópolis", destinoEstado: "SC", tipoVeiculo: "Bitrem", distancia: "750 km", pagamento: "R$ 5.500" },
  { id: "88287", dateTime: "Hoje, 10:20", origemCidade: "Sorocaba", origemEstado: "SP", destinoCidade: "Londrina", destinoEstado: "PR", tipoVeiculo: "Carreta LS", distancia: "520 km", pagamento: "R$ 3.800" },
  { id: "88286", dateTime: "Hoje, 09:50", origemCidade: "Ribeirão Preto", origemEstado: "SP", destinoCidade: "Novo Hamburgo", destinoEstado: "RS", tipoVeiculo: "Truck", distancia: "1.200 km", pagamento: "R$ 8.100" },
];

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <FilterChip label="Origem" value="SP" active />
          <FilterChip label="Destino" value="RS" active />
          <FilterChip label="Veículo" value="Carreta" />
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2.5 text-sm transition-all hover:shadow-md hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring/20">
                <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Data</span>
                <span className="font-semibold text-card-foreground">
                  {date ? format(date, "dd/MM", { locale: ptBR }) : "Hoje"}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Section title */}
        <h1 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Cargas disponíveis ({mockCargas.length})
        </h1>

        {/* Cards */}
        <div className="space-y-4">
          {mockCargas.map((carga) => (
            <LoadCard key={carga.id} {...carga} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
