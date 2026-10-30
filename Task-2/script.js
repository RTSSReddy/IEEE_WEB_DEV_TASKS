// Phase 2: Campus Events Manager

let campusEvents = [
  { id: 1710001, name: "IEEE Orientation Meet", date: "2026-11-05", place: "Seminar Hall A" },
  { id: 1710002, name: "Decrypt Pop Quiz Round 1", date: "2026-11-12", place: "Auditorium" }
];

const elements = {
  form: document.getElementById("eventForm"),
  name: document.getElementById("eventName"),
  date: document.getElementById("eventDate"),
  place: document.getElementById("eventPlace"),
  search: document.getElementById("searchInput"),
  list: document.getElementById("eventList"),
  status: document.getElementById("message")
};

// manipulation and filtering
const renderEvents = (query = "") => {
  elements.list.innerHTML = "";
  const normalizedQuery = query.trim().toLowerCase();

  const results = campusEvents.filter(ev => 
    ev.name.toLowerCase().includes(normalizedQuery) ||
    ev.place.toLowerCase().includes(normalizedQuery)
  );

  if (results.length === 0) {
    elements.status.textContent = "No campus events match your criteria.";
    return;
  }

  elements.status.textContent = "";

  const fragment = document.createDocumentFragment();

  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "event-card";

    const content = document.createElement("div");
    content.className = "event-meta";
    content.innerHTML = `<h4>${item.name}</h4><span>📅 ${item.date} | 📍 ${item.place}</span>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Remove";
    deleteBtn.onclick = () => deleteEventHandler(item.id);

    card.append(content, deleteBtn);
    fragment.appendChild(card);
  });

  elements.list.appendChild(fragment);
};

const deleteEventHandler = (id) => {
  campusEvents = campusEvents.filter(ev => ev.id !== id);
  renderEvents(elements.search.value)
};


elements.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = elements.name.value.trim();
  const dateVal == elements.date.value;
  const placeVal = elements.place.value.trim()

  if (!nameVal || !dateVal || !placeVal) {
    elements.status.textContent = "Error: All fields are required.";
    return;
  }

  campusEvents.push({
    id: Date.now(),
    name: nameVal,
    date: dateVal,
    place: placeVal
  };

  elements.form.reset();
  renderEvents(elements.search.value);
});


elements.search.addEventListener("input", (e) => {
  renderEvents(e.target.value);
});

// Async bootstrap lifecycle
const initializeApp = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 80));
    renderEvents();
  } catch (err) {
    elements.status.textContent = "Failed to load events.";
  }
};

initializeApp();
