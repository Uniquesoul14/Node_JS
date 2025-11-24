import React from "react";

export default function SidebarRight() {
  return (
    <aside className="sidebar-right">
      <div>
        <input className="form-control rounded-pill" placeholder="Search Twitter" />
      </div>

      <div style={{ marginTop: 18 }}>
        <div className="p-3" style={{ background: "#f5f8fa", borderRadius: 8 }}>
          <h6>Trends for you</h6>
          <div className="mt-2">
            <div className="mb-2">
              <div className="text-muted small">Trending</div>
              <div><strong>#BreakingNews</strong></div>
              <div className="text-muted small">12.3K Tweets</div>
            </div>
            <div className="mb-2">
              <div className="text-muted small">Sports</div>
              <div><strong>#Championship</strong></div>
              <div className="text-muted small">5.2K Tweets</div>
            </div>
          </div>
        </div>

        <div className="p-3 mt-3" style={{ background: "#f5f8fa", borderRadius: 8 }}>
          <h6>Who to follow</h6>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <img src="https://i.pravatar.cc/35" style={{ borderRadius: 20 }} />
              <div>
                <div><strong>Dev Guru</strong></div>
                <div className="text-muted small">@devguru</div>
              </div>
            </div>
            <button className="btn btn-outline-primary btn-sm">Follow</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
