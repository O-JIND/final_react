import { NavLink } from "react-router-dom";
import { SectionKey, SIDEBAR } from "./constants/types";



export default function Sidebar({ section }: { section: SectionKey }) {
    const items = SIDEBAR[section] ?? [];

    return (
        <aside style={{ width: 220, borderRight: "1px solid #333", paddingRight: 12 }}>
            <div style={{ marginBottom: 12, fontWeight: "bold" }}>{section.toUpperCase()}</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        style={({ isActive }) => ({
                            textDecoration: "none",
                            fontWeight: isActive ? "bold" : "normal",
                        })}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </aside>
    )
}