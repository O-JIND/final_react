import { NavLink } from "react-router-dom";
import { MYSIDEBAR, SectionKey } from "./constants/types";



export default function MySidebar() {
    return (
        <aside style={{ width: 220, borderRight: "1px solid #333", paddingRight: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {MYSIDEBAR.map((item) => (
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
