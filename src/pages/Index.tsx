import { useState } from "react";
import { CalendarIcon, MapPin, Compass, Truck, Zap } from "lucide-react";
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
  const [dateFrom, setDateFrom] = useState<Date | undefined>(new Date());
  const [dateTo, setDateTo] = useState<Date | undefined>(new Date());

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Atmospheric background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 py-8 sm:py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-md">
              <Zap className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-foreground">
              FreightFlow
            </h1>
          </div>
          <p className="text-sm text-muted-foreground font-medium pl-[46px]">
            Cargas disponíveis em tempo real
          </p>
        </div>

        {/* Filter bar */}
        <div className="glass-surface rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 premium-shadow mb-6 sm:mb-8">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-2.5">
            <FilterChip
              label="Origem"
              value="SP"
              active
              icon={<MapPin className="h-3.5 w-3.5" />}
            />
            <FilterChip
              label="Destino"
              value="RS"
              active
              icon={<Compass className="h-3.5 w-3.5" />}
            />
            <FilterChip
              label="Veículo"
              value="Carreta"
              icon={<Truck className="h-3.5 w-3.5" />}
            />

            <Popover>
              <PopoverTrigger asChild>
                <button className={cn(
                  "group relative flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl bg-card border border-border/60 px-3 sm:px-4 py-2.5 sm:py-3 text-sm",
                  "transition-all duration-300 ease-out",
                  "hover:premium-shadow hover:border-primary/25 hover:-translate-y-0.5",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                  "active:translate-y-0 active:shadow-sm"
                )}>
                  <span className="flex items-center justify-center h-7 w-7 rounded-xl bg-badge text-primary transition-colors duration-200 group-hover:bg-primary/15">
                    <CalendarIcon className="h-3.5 w-3.5" />
                  </span>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-muted-foreground text-[10px] font-semibold uppercase tracking-widest leading-none">Período</span>
                    <span className="font-bold text-card-foreground text-xs sm:text-sm leading-none">
                      {dateFrom ? format(dateFrom, "dd/MM", { locale: ptBR }) : "Início"}
                      {" — "}
                      {dateTo ? format(dateTo, "dd/MM", { locale: ptBR }) : "Fim"}
                    </span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-2xl border-border/40 premium-shadow" align="start" side="bottom">
                <div className="flex flex-col sm:flex-row">
                  <div className="p-2.5 sm:p-3 border-b sm:border-b-0 sm:border-r border-border/40">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-1">Início</p>
                    <Calendar
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      initialFocus
                      className={cn("p-1.5 sm:p-2 pointer-events-auto")}
                    />
                  </div>
                  <div className="p-2.5 sm:p-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-1">Fim</p>
                    <Calendar
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      className={cn("p-1.5 sm:p-2 pointer-events-auto")}
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Section title */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
            Cargas disponíveis
          </h2>
          <span className="inline-flex items-center justify-center h-6 min-w-[28px] px-2 rounded-lg bg-primary/10 text-primary text-xs font-extrabold">
            {mockCargas.length}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-transparent" />
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {mockCargas.map((carga, i) => (
            <LoadCard key={carga.id} {...carga} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
