import { RoomService } from "@roomservice/browser";
import { useEffect, useState } from "react";
import { PresenceClient } from "@roomservice/browser/dist/PresenceClient";
import { Cursor } from "../components/Cursor";

interface Position {
  x: number;
  y: number;
}

const rs = new RoomService({
  authURL: "/api/hello",
});

function flare(actor: string) {
  const colors = [
    "#f3a683",
    "#f19066",
    "#f7d794",
    "#f5cd79",
    "#778beb",
    "#546de5",
    "#e77f67",
    "#e15f41",
    "#cf6a87",
    "#c44569",
    "#786fa6",
    "#574b90",
    "#f8a5c2",
    "#f78fb3",
    "#63cdda",
    "#3dc1d3",
    "#ea8685",
    "#e66767",
    "#596275",
    "#303952",
  ];

  const key = actor
    .split("")
    .map((f) => f.charCodeAt(0))
    .reduce((a, b) => a + b, 0);

  return {
    color: colors[key % colors.length],
    size: 35,
  };
}

export default function Home() {
  const [presence, setPresence] = useState<PresenceClient>();
  const [positions, setPositions] = useState<{ [key: string]: Position }>({});
  const [me, setMe] = useState("");

  useEffect(() => {
    async function load() {
      const room = await rs.room("coolroom");
      const p = await room.presence();
      setPresence(p);
      setMe(p.me);

      return room.subscribe<{ x: number; y: number }>(p, "position", (msg) => {
        setPositions(msg);
      });
    }

    load().catch(console.error);
  }, []);

  function onMouseMove(e) {
    if (!presence) return;
    presence.set(
      "position",
      {
        x: e.clientX,
        y: e.clientY,
      },
      2
    );
  }

  const values = Object.entries(positions);

  return (
    <div onMouseMove={onMouseMove} className="window">
      <div
        style={{
          padding: 24,
        }}
      >
        Hello! This demo works better with friends. Share the link with someone!
      </div>
      {values.map(([guest, pos]) => {
        if (guest === me) return;
        const f = flare(guest);
        return (
          <Cursor
            key={guest}
            x={pos.x}
            y={pos.y}
            fill={f.color}
            size={f.size}
          />
        );
      })}
    </div>
  );
}
