"use client";
import { useState } from "react";

export default function PlanForm() {
  const [query, setQuery] = useState("");
  return (
    <form className="plan-form" onSubmit={(e) => e.preventDefault()}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Describe your ideal trip..."
      />
      <button type="submit">Get AI Plan</button>
    </form>
  );
}
