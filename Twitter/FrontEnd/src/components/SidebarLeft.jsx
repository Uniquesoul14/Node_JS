import React from "react";


const LOGO_PATH = "/https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE.jpg";

export default function SidebarLeft() {
  return (
    <aside className="sidebar-left">
      <div style={{ marginBottom: 18 }}>
        <img src={LOGO_PATH} alt="logo" className="brand-logo" />
      </div>

      <div>
        <div className="sidebar-item">🏠 Home</div>
        <div className="sidebar-item">🔍 Explore</div>
        <div className="sidebar-item">🔔 Notifications</div>
        <div className="sidebar-item">✉ Messages</div>
        <div className="sidebar-item">🔖 Bookmarks</div>
        <div className="sidebar-item">📃 Lists</div>
        <div className="sidebar-item">👤 Profile</div>
        <div className="sidebar-item">⋯ More</div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button className="btn btn-primary w-100 rounded-pill">Tweet</button>
      </div>

      <div style={{ position: "absolute", bottom: 18 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <img src="https://i.pravatar.cc/40" alt="me" style={{ borderRadius: 20 }} />
          <div>
            <div><strong>Your Name</strong></div>
            <div className="text-muted">@username</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
