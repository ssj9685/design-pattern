export class Subject {
  registerObserver(observer) {
    throw new Error("Not implemented");
  }
  removeObserver(observer) {
    throw new Error("Not implemented");
  }
  notifyObservers() {
    throw new Error("Not implemented");
  }
}

export class Observer {
  update(temperature, humidity) {
    throw new Error("Not implemented");
  }
}

export class DisplayElement {
  display() {
    throw new Error("Not implemented");
  }
}
