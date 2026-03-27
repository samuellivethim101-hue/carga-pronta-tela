import { MapPin, Truck, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoadCardProps {
  id: string;
  dateTime: string;
  origemCidade: string;
  origemEstado: string;
  destinoCidade: string;
  destinoEstado: string;
  tipoVeiculo: string;
  distancia: string;
  pagamento: string;
}

const LoadCard = ({
  id,
  dateTime,
  origemCidade,
  origemEstado,
  destinoCidade,
  destinoEstado,
  tipoVeiculo,
  distancia,
  pagamento,
}: LoadCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-5 transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-badge px-3 py-1 text-xs font-semibold text-badge-text">
          🕐 {dateTime}
        </span>
        <span className="text-xs text-muted-foreground font-mono">ID: #{id}</span>
      </div>

      {/* Route */}
      <div className="flex gap-4 mb-4">
        {/* Timeline */}
        <div className="flex flex-col items-center pt-1">
          <div className="h-3 w-3 rounded-full border-2 border-primary bg-card" />
          <div className="w-0.5 flex-1 bg-primary/20 my-1" />
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>

        {/* Locations */}
        <div className="flex-1 space-y-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Origem</p>
            <p className="text-sm font-bold text-card-foreground">{origemCidade}, {origemEstado}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Destino</p>
            <p className="text-sm font-bold text-card-foreground">{destinoCidade}, {destinoEstado}</p>
          </div>
        </div>
      </div>

      {/* Info blocks */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 rounded-xl bg-background p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Truck className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Tipo</span>
          </div>
          <p className="text-sm font-bold text-card-foreground">{tipoVeiculo}</p>
        </div>
        <div className="flex-1 rounded-xl bg-background p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Navigation className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Distância</span>
          </div>
          <p className="text-sm font-bold text-card-foreground">{distancia}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Pagamento</p>
          <p className="text-lg font-extrabold text-card-foreground">{pagamento}</p>
        </div>
        <Button variant="cta" className="rounded-full px-6">
          Tenho Interesse
        </Button>
      </div>
    </div>
  );
};

export default LoadCard;
