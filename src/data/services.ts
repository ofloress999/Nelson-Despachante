import {
  BadgeCheck,
  CarFront,
  ClipboardCheck,
  FileCheck2,
  FilePenLine,
  KeyRound,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const vehicleServices = [
  { title: "Desembaraço de processos junto ao Detran", description: "Orientação para encaminhar processos e pendências documentais.", icon: FileCheck2 },
  { title: "Regularização de veículos blindados", description: "Suporte documental para os procedimentos aplicáveis.", icon: ShieldCheck },
  { title: "Análise de documentação para compra de veículo", description: "Mais clareza antes de concluir sua negociação.", icon: ScanSearch },
  { title: "Primeiro emplacamento", description: "Acompanhamento para colocar seu veículo em circulação.", icon: CarFront },
  { title: "Regularização de veículos modificados", description: "Orientação para adequar alterações à documentação.", icon: Wrench },
  { title: "Desbloqueio de veículo sinistrado", description: "Suporte nas etapas necessárias para a regularização.", icon: KeyRound },
  { title: "Licenciamento anual", description: "Praticidade para manter as obrigações do veículo em dia.", icon: BadgeCheck },
  { title: "Atualização de CRV", description: "Apoio para atualizar os dados do registro do veículo.", icon: FilePenLine },
  { title: "Transferência de propriedade", description: "Condução simples e segura da documentação de transferência.", icon: ClipboardCheck },
];

export const licenseServices = [
  "Regularização de CNH suspensa ou cassada",
  "Renovação de CNH",
  "Alteração de dados cadastrais",
  "Indicação de condutor junto ao órgão emissor",
  "Primeiro registro no estado",
  "Permissão Internacional para Dirigir",
];

export const benefits = [
  { title: "Atendimento personalizado", text: "Orientação de acordo com a necessidade de cada cliente." },
  { title: "Praticidade", text: "Mais facilidade para buscar informações e encaminhar solicitações." },
  { title: "Acompanhamento", text: "Comunicação e suporte durante as etapas do atendimento." },
  { title: "Soluções diversificadas", text: "Serviços relacionados a veículos, habilitação e encaminhamento para cotação de seguros." },
];
