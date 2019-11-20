// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = new Map();
  }

  // Register an event handler
  on(eventName, callback) {
    let existingCbs = [];

    if (this.events.has(eventName)) {
      existingCbs = this.events.get(eventName);
    }

    existingCbs.push(callback);
    this.events.set(eventName, existingCbs);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.events.has(eventName)) {
      return;
    }

    for (let cb of this.events.get(eventName)) {
      cb();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events.delete(eventName);
  }
}

module.exports = Events;
