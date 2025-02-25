import { AccountButton } from "@latticexyz/entrykit/internal";
import { Synced } from "./mud/Synced";
import { Game } from "./game/Game";

export function App() {
  return (
    <>
      <div className="fixed inset-0 grid place-items-center p-4">
        <Synced
          fallback={({ message, percentage }) => (
            <div className="tabular-nums">
              {message} ({percentage.toFixed(1)}%)…
            </div>
          )}
        >
          <Game />
        </Synced>
      </div>
      <div className="fixed top-2 right-2">
        <AccountButton />
      </div>
    </>
  );
}
