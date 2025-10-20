"use client";
export default function BookingForm() {
  return (
    <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
      <input placeholder="Check-in" type="date" />
      <input placeholder="Check-out" type="date" />
      <button type="submit">Search</button>
    </form>
  );
}
