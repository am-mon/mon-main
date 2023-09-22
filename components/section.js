import Transition from "./transition";

export default function Section({ children }) {
  return (
    <div>
      <Transition>
        <div className="container mx-auto box-border px-5">{children}</div>
      </Transition>
    </div>
  );
}
