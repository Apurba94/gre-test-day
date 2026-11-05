/* GRE Test Day Planner: a countdown and checklist for the final weeks, the day before and the day itself. */
(function () {
  'use strict';
  const GROUPS = [
    { name: 'Four weeks before', daysBefore: 28, items: ['Confirm your test date, time and location (or home edition setup) in your ETS account.', 'Check that the name on your registration matches your ID exactly.', 'Look up which programs need scores and their institution codes.', 'Take a full timed practice test.'] },
    { name: 'One week before', daysBefore: 7, items: ['Take your last full practice test, then only review.', 'Re-read your error log.', 'Plan your route and travel time, or test your computer for the home edition.', 'Shift your sleep to match the test time.'] },
    { name: 'The day before', daysBefore: 1, items: ['Light review only: no new topics.', 'Lay out your ID and anything the rules allow.', 'Check the current rules on ets.org for what you may bring.', 'Sleep well.'] },
    { name: 'Test day', daysBefore: 0, items: ['Eat a normal meal.', 'Arrive early, or start the home edition check-in early.', 'Pace yourself: mark hard questions and come back.', 'Breathe between sections.'] },
  ];
  const App = {
    about: 'A calm test day comes from a checklist done early. Set your GRE date to see a countdown and four checklists, from four weeks out to test day. Rules on ID, breaks and the home edition change, so the list points you to ets.org for the details.',
    how: ['Set your test date in **Checklist**.', 'Tick items as you do them; each group shows the date to finish it by.', 'Check ets.org for the current rules on ID and what you may bring.'],
    tabs: [{ id: 'list', label: 'Checklist', render(el) { SK.countdownChecklist(el, { groups: GROUPS, footer: 'Rules for ID, breaks and the home edition are set by ETS and can change. Check ets.org before your test.' }); } }],
    GROUPS,
    checks: { 'groups run from earliest to test day': (data, assert) => { const d = GROUPS.map((g) => g.daysBefore); assert.deepEqual(d, d.slice().sort((a, b) => b - a)); for (const g of GROUPS) assert.ok(g.items.length >= 3); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
