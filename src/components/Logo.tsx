import { useState } from "react";
import { company } from "@/config/company";

export default function Logo({ light = true }: { light?: boolean }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`brand ${light ? "brand--light" : ""}`}>
      {!failed && (
        <img
          src={company.logo}
          alt="Nelson Despachante"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="brand__fallback" aria-label="Nelson Despachante">
          <b>NELSON</b>
          <small>DESPACHANTE</small>
        </span>
      )}
    </span>
  );
}
