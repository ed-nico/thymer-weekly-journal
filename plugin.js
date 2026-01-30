/**
 * Weekly Journal for Thymer
 *
 * View your journal pages side by side in a weekly or 3-day view.
 *
 * @version 1.0.0
 * @license MIT
 */

const WEEKLY_JOURNAL_CSS = `
  .weekly-journal-view {
    padding: 24px;
    font-family: var(--font-family);
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--bg-default);
  }

  .weekly-journal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-shrink: 0;
  }

  .weekly-journal-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-default);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .weekly-journal-title-icon {
    color: var(--accent-color);
  }

  .weekly-journal-nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .weekly-journal-nav-btn {
    padding: 8px 12px;
    background: var(--bg-hover);
    border: 1px solid var(--border-default);
    border-radius: 6px;
    color: var(--text-default);
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.15s ease;
  }

  .weekly-journal-nav-btn:hover {
    background: var(--bg-active);
    border-color: var(--border-strong);
  }

  .weekly-journal-nav-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .weekly-journal-week-label {
    font-size: 14px;
    color: var(--text-muted);
    min-width: 180px;
    text-align: center;
  }

  .weekly-journal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 12px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  .weekly-journal-grid.view-3day {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .weekly-journal-view-toggle {
    display: flex;
    gap: 4px;
    margin-right: 16px;
  }

  .weekly-journal-view-btn {
    padding: 6px 10px;
    background: var(--bg-hover);
    border: 1px solid var(--border-default);
    border-radius: 4px;
    color: var(--text-muted);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .weekly-journal-view-btn:hover {
    background: var(--bg-active);
    color: var(--text-default);
  }

  .weekly-journal-view-btn.active {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
  }

  .weekly-journal-day {
    background: var(--bg-hover);
    border: 1px solid var(--border-default);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
  }

  .weekly-journal-day.today {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 1px var(--accent-color);
  }

  .weekly-journal-day.empty {
    opacity: 0.5;
  }

  .weekly-journal-day-header {
    padding: 12px 14px;
    border-bottom: 1px solid var(--border-default);
    flex-shrink: 0;
  }

  .weekly-journal-day-name {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-muted);
    margin-bottom: 2px;
  }

  .weekly-journal-day.today .weekly-journal-day-name {
    color: var(--accent-color);
  }

  .weekly-journal-day-date {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-default);
  }

  .weekly-journal-day-content {
    flex: 1;
    overflow-y: auto;
    padding: 12px 14px;
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-default);
  }

  .weekly-journal-day-content .line-item {
    margin-bottom: 6px;
  }

  .weekly-journal-day-content .heading {
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 8px;
  }

  .weekly-journal-day-content .heading-1 { font-size: 18px; }
  .weekly-journal-day-content .heading-2 { font-size: 16px; }
  .weekly-journal-day-content .heading-3 { font-size: 14px; }

  .weekly-journal-day-content .task {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .weekly-journal-day-content .task-checkbox {
    width: 14px;
    height: 14px;
    border: 2px solid var(--border-strong);
    border-radius: 3px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .weekly-journal-day-content .task-checkbox.done {
    background: var(--accent-color);
    border-color: var(--accent-color);
  }

  .weekly-journal-day-content .task-text.done {
    text-decoration: line-through;
    color: var(--text-muted);
  }

  .weekly-journal-day-content .empty-state {
    color: var(--text-muted);
    font-style: italic;
    text-align: center;
    padding: 20px;
  }

  .weekly-journal-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--text-muted);
  }

  .journal-properties {
    padding: 8px 0;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--border-default);
  }

  .journal-property {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }

  .journal-property .prop-name {
    font-weight: 500;
    color: var(--text-default);
  }

  .journal-property .prop-value {
    color: var(--text-muted);
  }

  .weekly-journal-day-content .list-item {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }

  .weekly-journal-day-content .list-marker {
    color: var(--text-muted);
    flex-shrink: 0;
  }

  .weekly-journal-day-content .reference,
  .weekly-journal-day-content .transclusion {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--accent-color);
    font-size: 12px;
  }

  .weekly-journal-day-content .ref-icon {
    font-size: 10px;
  }

  .line-item-children {
    margin-top: 4px;
  }

  .weekly-journal-day-content a {
    color: var(--accent-color);
    text-decoration: none;
  }

  .weekly-journal-day-content a:hover {
    text-decoration: underline;
  }

  .weekly-journal-day-content .segment-bold {
    font-weight: 600;
  }

  .weekly-journal-day-content .segment-italic {
    font-style: italic;
  }

  .weekly-journal-day-content .segment-code {
    font-family: monospace;
    background: var(--bg-active);
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 12px;
  }

  .weekly-journal-day-content .segment-datetime {
    color: var(--accent-color);
  }

  .weekly-journal-day-content .segment-hashtag {
    color: var(--accent-color);
  }

  .weekly-journal-day-header.clickable {
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .weekly-journal-day-header.clickable:hover {
    background: var(--bg-active);
  }

  .weekly-journal-day-header .open-icon {
    float: right;
    opacity: 0;
    transition: opacity 0.15s ease;
    color: var(--text-muted);
    font-size: 12px;
  }

  .weekly-journal-day-header.clickable:hover .open-icon {
    opacity: 1;
  }
`;

class Plugin extends AppPlugin {
  weekOffset = 0;
  viewMode = "week";

  async onLoad() {
    this.ui.injectCSS(WEEKLY_JOURNAL_CSS);

    this.ui.registerCustomPanelType("weekly-journal-view", (panel) => {
      this.currentPanel = panel;
      const element = panel.getElement();
      if (element) {
        panel.setTitle("Weekly Journal");
        this.renderWeeklyView(element);
      }
    });

    this.ui.addSidebarItem({
      icon: "notebook",
      label: "Weekly Journal",
      onClick: () => this.openWeeklyView(),
    });

    this.ui.addCommandPaletteCommand({
      label: "Open Weekly Journal View",
      icon: "notebook",
      callback: () => this.openWeeklyView(),
    });
  }

  async openWeeklyView() {
    this.weekOffset = 0;
    const panel = await this.ui.createPanel();
    if (panel) {
      panel.navigateToCustomType("weekly-journal-view");
    }
  }

  async renderWeeklyView(container) {
    container.innerHTML = `
      <div class="weekly-journal-view">
        <div class="weekly-journal-loading">Loading journal entries...</div>
      </div>
    `;

    const dates = this.viewMode === "week"
      ? this.getWeekDates(this.weekOffset)
      : this.get3DayDates(this.weekOffset);
    const journals = await this.getJournalsForDates(dates);

    const view = container.querySelector(".weekly-journal-view");
    view.innerHTML = "";

    // Header
    const header = document.createElement("div");
    header.className = "weekly-journal-header";

    const title = document.createElement("div");
    title.className = "weekly-journal-title";
    title.innerHTML = `
      <span class="weekly-journal-title-icon">${this.ui.createIcon("notebook").outerHTML}</span>
      Weekly Journal
    `;

    const nav = document.createElement("div");
    nav.className = "weekly-journal-nav";

    // View toggle
    const viewToggle = document.createElement("div");
    viewToggle.className = "weekly-journal-view-toggle";

    const weekViewBtn = document.createElement("button");
    weekViewBtn.className = `weekly-journal-view-btn${this.viewMode === "week" ? " active" : ""}`;
    weekViewBtn.textContent = "7 Day";
    weekViewBtn.onclick = () => {
      this.viewMode = "week";
      this.weekOffset = 0;
      this.renderWeeklyView(container);
    };

    const threeDayBtn = document.createElement("button");
    threeDayBtn.className = `weekly-journal-view-btn${this.viewMode === "3day" ? " active" : ""}`;
    threeDayBtn.textContent = "3 Day";
    threeDayBtn.onclick = () => {
      this.viewMode = "3day";
      this.weekOffset = 0;
      this.renderWeeklyView(container);
    };

    viewToggle.appendChild(weekViewBtn);
    viewToggle.appendChild(threeDayBtn);

    const prevBtn = document.createElement("button");
    prevBtn.className = "weekly-journal-nav-btn";
    prevBtn.innerHTML = `${this.ui.createIcon("chevron-left").outerHTML} Prev`;
    prevBtn.onclick = () => {
      this.weekOffset--;
      this.renderWeeklyView(container);
    };

    const weekLabel = document.createElement("span");
    weekLabel.className = "weekly-journal-week-label";
    weekLabel.textContent = this.getDateRangeLabel(dates);

    const nextBtn = document.createElement("button");
    nextBtn.className = "weekly-journal-nav-btn";
    nextBtn.innerHTML = `Next ${this.ui.createIcon("chevron-right").outerHTML}`;
    nextBtn.disabled = this.weekOffset >= 0;
    nextBtn.onclick = () => {
      this.weekOffset++;
      this.renderWeeklyView(container);
    };

    const todayBtn = document.createElement("button");
    todayBtn.className = "weekly-journal-nav-btn";
    todayBtn.innerHTML = `${this.ui.createIcon("calendar").outerHTML} Today`;
    todayBtn.onclick = () => {
      this.weekOffset = 0;
      this.renderWeeklyView(container);
    };

    nav.appendChild(viewToggle);
    nav.appendChild(prevBtn);
    nav.appendChild(weekLabel);
    nav.appendChild(nextBtn);
    nav.appendChild(todayBtn);

    header.appendChild(title);
    header.appendChild(nav);
    view.appendChild(header);

    // Grid
    const grid = document.createElement("div");
    grid.className = `weekly-journal-grid${this.viewMode === "3day" ? " view-3day" : ""}`;

    const today = new Date().toISOString().slice(0, 10);

    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const journal = journals[i];
      const isToday = date === today;
      const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "short" });

      const dayEl = document.createElement("div");
      dayEl.className = `weekly-journal-day${isToday ? " today" : ""}${!journal ? " empty" : ""}`;

      const dayHeader = document.createElement("div");
      dayHeader.className = "weekly-journal-day-header";

      const dayNameEl = document.createElement("div");
      dayNameEl.className = "weekly-journal-day-name";
      dayNameEl.textContent = dayName;

      const dayDate = document.createElement("div");
      dayDate.className = "weekly-journal-day-date";
      dayDate.textContent = this.formatDate(date);

      dayHeader.appendChild(dayNameEl);
      dayHeader.appendChild(dayDate);

      if (journal) {
        dayHeader.classList.add("clickable");
        const openIcon = document.createElement("span");
        openIcon.className = "open-icon";
        openIcon.innerHTML = this.ui.createIcon("external-link").outerHTML;
        dayHeader.appendChild(openIcon);

        dayHeader.onclick = async () => {
          const newPanel = await this.ui.createPanel();
          if (newPanel) {
            newPanel.navigateTo({
              type: "edit_panel",
              rootId: journal.guid,
              workspaceGuid: this.getWorkspaceGuid(),
            });
          }
        };
      }

      const dayContent = document.createElement("div");
      dayContent.className = "weekly-journal-day-content";

      if (journal) {
        await this.renderJournalContent(journal, dayContent);
      } else {
        dayContent.innerHTML = '<div class="empty-state">No entry</div>';
      }

      dayEl.appendChild(dayHeader);
      dayEl.appendChild(dayContent);
      grid.appendChild(dayEl);
    }

    view.appendChild(grid);
  }

  // Date utilities

  getWeekDates(weekOffset = 0) {
    const dates = [];
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff + weekOffset * 7);

    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      dates.push(date.toISOString().slice(0, 10));
    }
    return dates;
  }

  get3DayDates(offset = 0) {
    const dates = [];
    const now = new Date();
    const centerDate = new Date(now);
    centerDate.setDate(now.getDate() + offset * 3);

    for (let i = -1; i <= 1; i++) {
      const date = new Date(centerDate);
      date.setDate(centerDate.getDate() + i);
      dates.push(date.toISOString().slice(0, 10));
    }
    return dates;
  }

  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  getDateRangeLabel(dates) {
    const start = this.formatDate(dates[0]);
    const end = this.formatDate(dates[dates.length - 1]);
    return `${start} - ${end}`;
  }

  // Data fetching

  async getJournalCollection() {
    const collections = await this.data.getAllCollections();
    return collections.find((c) => c.getName() === "Journals");
  }

  async getJournalsForDates(dates) {
    const journalCollection = await this.getJournalCollection();
    if (!journalCollection) return new Array(dates.length).fill(null);

    const records = await journalCollection.getAllRecords();
    return dates.map((dateStr) => {
      const dateKey = dateStr.replace(/-/g, "");
      return records.find((r) => r.guid.endsWith(dateKey)) || null;
    });
  }

  // Rendering

  async renderJournalContent(journal, container) {
    try {
      const propsEl = this.renderProperties(journal);
      if (propsEl) container.appendChild(propsEl);

      const items = await journal.getLineItems();
      if (!items || items.length === 0) {
        if (!propsEl) {
          container.innerHTML = '<div class="empty-state">Empty entry</div>';
        }
        return;
      }

      const childrenMap = new Map();
      for (const item of items) {
        const parentGuid = item.parent_guid || journal.guid;
        if (!childrenMap.has(parentGuid)) {
          childrenMap.set(parentGuid, []);
        }
        childrenMap.get(parentGuid).push(item);
      }

      const topLevelItems = childrenMap.get(journal.guid) || [];
      for (const item of topLevelItems) {
        const el = this.renderLineItem(item, childrenMap);
        if (el) container.appendChild(el);
      }
    } catch (e) {
      container.innerHTML = '<div class="empty-state">Error loading content</div>';
    }
  }

  renderProperties(journal) {
    try {
      const props = journal.getAllProperties();
      if (!props || props.length === 0) return null;

      const propsContainer = document.createElement("div");
      propsContainer.className = "journal-properties";

      const skipProps = ["Name", "Title", "Modified", "Created"];
      for (const prop of props) {
        const name = prop.name;
        const value = prop.text() || prop.choiceLabel() || "";
        if (!value || skipProps.includes(name)) continue;

        const propEl = document.createElement("div");
        propEl.className = "journal-property";
        propEl.innerHTML = `<span class="prop-name">${this.escapeHtml(name)}:</span> <span class="prop-value">${this.escapeHtml(value)}</span>`;
        propsContainer.appendChild(propEl);
      }

      return propsContainer.children.length > 0 ? propsContainer : null;
    } catch (e) {
      return null;
    }
  }

  renderLineItem(item, childrenMap, depth = 0) {
    const el = document.createElement("div");
    el.className = "line-item";
    if (depth > 0) {
      el.style.marginLeft = `${depth * 16}px`;
    }

    // Use HTML rendering for segments (handles links, formatting, etc.)
    const segmentsHtml = this.renderSegmentsHtml(item.segments);
    const plainText = this.getItemText(item);

    switch (item.type) {
      case "heading":
        const size = item.heading_size || 2;
        el.className += ` heading heading-${size}`;
        el.innerHTML = segmentsHtml || this.escapeHtml(plainText);
        break;

      case "task":
        el.className += " task";
        const isDone = item.done === 8;
        el.innerHTML = `
          <div class="task-checkbox${isDone ? " done" : ""}"></div>
          <span class="task-text${isDone ? " done" : ""}">${segmentsHtml}</span>
        `;
        break;

      case "olist":
        el.className += " list-item olist";
        el.innerHTML = `<span class="list-marker">1.</span> ${segmentsHtml}`;
        break;

      case "ulist":
        el.className += " list-item ulist";
        el.innerHTML = `<span class="list-marker">•</span> ${segmentsHtml}`;
        break;

      case "document":
      case "ref":
        el.className += " reference";
        el.innerHTML = `<span class="ref-icon">📄</span> ${segmentsHtml || this.escapeHtml(plainText) || "Linked document"}`;
        break;

      case "transclusion":
        el.className += " transclusion";
        el.innerHTML = `<span class="ref-icon">↗</span> ${segmentsHtml || this.escapeHtml(plainText) || "Transcluded content"}`;
        break;

      default:
        if (segmentsHtml) {
          el.innerHTML = segmentsHtml;
        } else if (plainText) {
          el.textContent = plainText;
        } else {
          return null;
        }
    }

    // Render children recursively
    const children = childrenMap?.get(item.guid) || [];
    if (children.length > 0) {
      const childContainer = document.createElement("div");
      childContainer.className = "line-item-children";
      for (const child of children) {
        const childEl = this.renderLineItem(child, childrenMap, depth + 1);
        if (childEl) childContainer.appendChild(childEl);
      }
      if (childContainer.children.length > 0) {
        el.appendChild(childContainer);
      }
    }

    return el;
  }

  getItemText(item) {
    if (!item.segments) return "";
    return item.segments
      .map((seg) => {
        if (seg.type === "text" && typeof seg.text === "string") {
          return seg.text;
        } else if (seg.type === "ref" && seg.text?.guid) {
          // Look up the referenced record to get its name
          const refRecord = this.data.getRecord(seg.text.guid);
          const refName = refRecord?.getName() || "[link]";
          return `[[${refName}]]`;
        } else if (seg.type === "datetime" && seg.text?.d) {
          const d = seg.text.d;
          const date = new Date(`${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}`);
          return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        } else if (typeof seg.text === "string") {
          return seg.text;
        }
        return "";
      })
      .join("");
  }

  renderSegmentsHtml(segments) {
    if (!segments || segments.length === 0) return "";

    return segments.map((seg) => {
      const text = typeof seg.text === "string" ? seg.text : "";

      switch (seg.type) {
        case "text":
          return this.escapeHtml(text);

        case "bold":
          return `<span class="segment-bold">${this.escapeHtml(text)}</span>`;

        case "italic":
          return `<span class="segment-italic">${this.escapeHtml(text)}</span>`;

        case "code":
          return `<span class="segment-code">${this.escapeHtml(text)}</span>`;

        case "link":
          // Link segment - text is the URL
          if (text) {
            return `<a href="${this.escapeHtml(text)}" target="_blank">${this.escapeHtml(text)}</a>`;
          }
          return "";

        case "linkobj":
          // Link object - text can be {url, label} or just URL string
          let url = "";
          let label = "";
          if (seg.text && typeof seg.text === "object") {
            url = seg.text.url || seg.text.href || "";
            label = seg.text.label || seg.text.title || url;
          } else if (text) {
            url = text;
            label = text;
          }
          if (url) {
            return `<a href="${this.escapeHtml(url)}" target="_blank">${this.escapeHtml(label)}</a>`;
          }
          return this.escapeHtml(label);

        case "ref":
          // Ref segments contain {guid: '...'} - we need to look up the record name
          const refGuid = seg.text?.guid;
          if (refGuid) {
            // Look up the referenced record to get its name
            const refRecord = this.data.getRecord(refGuid);
            const refName = refRecord?.getName() || "[link]";
            return `<span class="segment-hashtag">[[${this.escapeHtml(refName)}]]</span>`;
          }
          return `<span class="segment-hashtag">[ref]</span>`;

        case "hashtag":
          return `<span class="segment-hashtag">#${this.escapeHtml(text)}</span>`;

        case "datetime":
          if (seg.text?.d) {
            const d = seg.text.d;
            const date = new Date(`${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}`);
            const formatted = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
            return `<span class="segment-datetime">${formatted}</span>`;
          }
          return "";

        default:
          // For unknown types, try to extract text
          if (text) {
            // Check if it looks like a URL
            if (text.startsWith("http://") || text.startsWith("https://")) {
              return `<a href="${this.escapeHtml(text)}" target="_blank">${this.escapeHtml(text)}</a>`;
            }
            return this.escapeHtml(text);
          }
          return "";
      }
    }).join("");
  }

  escapeHtml(text) {
    return this.ui.htmlEscape(text);
  }
}
