# React Native Interview Questions & Answers

## 1. What is JSX?

**Answer:**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript. React converts JSX into JavaScript before execution.

---

## 2. What is the Virtual DOM?

**Answer:**
The Virtual DOM is a lightweight JavaScript representation of the real DOM. React compares the new Virtual DOM with the previous one and updates only the changed parts of the real DOM.

---

## 3. What is a Closure?

**Answer:**
A closure is a function that retains access to variables from its lexical scope even after the outer function has finished executing.

Example:

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
```

## 4. What is DOM?

**Answer:**
DOM (Document Object Model) is a tree-like object representation of an HTML document created by the browser. It allows JavaScript to dynamically access, modify, create, and delete elements and content on a webpage.

| DOM                         | Virtual DOM                     |
| --------------------------- | ------------------------------- |
| Real browser structure      | JavaScript representation       |
| Updates affect UI directly  | Updates happen in memory first  |
| Managed by browser          | Managed by React                |
| Slower for frequent updates | Optimized for efficient updates |


## 3. What is a Promise?

### Answer

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

### States of a Promise

* **Pending** – Initial state
* **Fulfilled** – Operation completed successfully
* **Rejected** – Operation failed

### Example

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then(result => console.log(result));
```

### Interview Definition

A Promise is an object used to handle asynchronous operations. It can be in one of three states: pending, fulfilled, or rejected.

---

## 4. What is State Management?

### Answer

State management is the process of storing and managing application data that affects the UI.

### Types of State

#### Local State

```javascript
const [count, setCount] = useState(0);
```

#### Global State

Used when multiple screens/components need the same data.

Examples:

* Context API
* Redux
* Zustand
* MobX

### Why Use State Management?

* Share data across components
* Avoid prop drilling
* Centralized application state

### Interview Definition

State management is the technique of storing, updating, and sharing application data efficiently across components.

---

## 5. What is Pagination?

### Answer

Pagination is the process of dividing a large dataset into smaller chunks called pages.

### Example

```text
Page 1: 1-20
Page 2: 21-40
Page 3: 41-60
```

### Benefits

* Better performance
* Reduced server load
* Improved user experience

### API Example

```http
GET /users?page=2&limit=10
```

### Interview Definition

Pagination is a technique used to retrieve and display a subset of records at a time instead of loading an entire dataset.

---

## 6. What are Race Conditions? (AbortController)

### Answer

A race condition occurs when multiple asynchronous operations compete and the slower response overwrites the latest data.

### Problem

```javascript
fetchUser(1);
fetchUser(2);
```

If request 1 finishes after request 2, stale data may be displayed.

### Solution Using AbortController

```javascript
const controller = new AbortController();

fetch(url, {
  signal: controller.signal
});

controller.abort();
```

### React Example

```javascript
useEffect(() => {
  const controller = new AbortController();

  fetch(url, {
    signal: controller.signal
  });

  return () => controller.abort();
}, []);
```

### Interview Definition

A race condition occurs when multiple asynchronous requests complete in an unexpected order. AbortController helps cancel outdated requests to prevent stale data.

---

## 7. Performance Optimization and Tools

### React Native Optimization Techniques

#### React.memo

```javascript
const Child = React.memo(ChildComponent);
```

#### useMemo

```javascript
const filteredData = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);
```

#### useCallback

```javascript
const handlePress = useCallback(() => {
  console.log("Pressed");
}, []);
```

#### FlatList Optimization

```javascript
<FlatList
  data={data}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
/>
```

#### Hermes

Benefits:

* Faster startup
* Lower memory usage
* Better JS execution

### Tools

* Flipper
* React DevTools Profiler
* React Native Performance Monitor
* Android Studio Profiler
* Xcode Instruments
* Sentry

### Interview Definition

Performance optimization involves reducing unnecessary renders, optimizing lists, caching expensive calculations, and monitoring app performance using profiling tools.

---

## 8. Common Console Output Questions

### Question 1

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

### Question 2

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
```

Output:

```text
1
3
2
```

### Question 3

```javascript
console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

console.log("3");
```

Output:

```text
1
3
2
```

### Question 4

```javascript
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");
```

Output:

```text
A
C
B
```

---

## 9. What is the Event Loop?

### Answer

The Event Loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations.

### Execution Order

```text
Call Stack
↓
Microtask Queue
↓
Macrotask Queue
```

### Example

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

Output:

```text
1
4
3
2
```

### Interview Definition

The Event Loop continuously checks the Call Stack and executes queued tasks when the stack becomes empty.

---

## 10. What is a Closure?

### Answer

A closure is a function that retains access to variables from its outer scope even after the outer function has finished execution.

### Example

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
```

### Uses

* Data privacy
* Event handlers
* React hooks
* Function factories

### Interview Definition

A closure is a function that remembers variables from its lexical scope even after the outer function has completed execution.

---

## 11. What is a Lexical Environment? What Happens When the Outer Function is Deleted?

### Answer

A lexical environment is the combination of:

* Local variables
* Function declarations
* Reference to its outer scope

### Example

```javascript
function outer() {
  let count = 0;

  return function inner() {
    console.log(count);
  };
}

const fn = outer();
```

When `outer()` finishes:

* The execution context is removed from the call stack.
* The variable `count` remains in memory.
* `inner()` still has access to `count`.

This happens because of closures.

### Interview Definition

A lexical environment consists of local variables and references to outer scopes. Variables remain in memory if they are referenced by a closure.

---

## 12. What is a Microtask in JavaScript?

### Answer

A microtask is a high-priority task that runs after synchronous code and before macrotasks.

### Examples

* Promise.then()
* Promise.catch()
* Promise.finally()
* await
* queueMicrotask()

### Example

```javascript
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

### Interview Definition

Microtasks are high-priority callbacks processed immediately after the current synchronous code completes and before macrotasks.

---

## 13. What is Hoisting?

### Answer

Hoisting is JavaScript's behavior of processing declarations before code execution.

### Example

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

JavaScript treats it as:

```javascript
var a;

console.log(a);

a = 10;
```

### let and const

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

because of the Temporal Dead Zone (TDZ).

### Interview Definition

Hoisting is the process where JavaScript moves declarations to the top of their scope before execution. Function declarations are fully hoisted, while `var` is initialized with `undefined`, and `let`/`const` remain in the Temporal Dead Zone until initialized.

# React Native Interview Questions

## 22. What is Navigation Stack and Drawer Navigation?

### Stack Navigation

Stack Navigation follows a Last In First Out (LIFO) approach.

### Example

```javascript
navigation.navigate("Profile");
navigation.goBack();
```

### Flow

```text
Home
 ↓
Profile
 ↓
Settings
```

When the user presses back:

```text
Settings → Profile → Home
```

### Drawer Navigation

Drawer Navigation provides a side menu that slides from the left or right.

### Example

```javascript
<Drawer.Navigator>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>
```

### Use Cases

* Dashboard apps
* E-commerce apps
* Applications with multiple modules

### Interview Definition

Stack Navigation manages screens in a stack, while Drawer Navigation provides a side menu for navigating between major sections of an application.

---

## 23. Difference Between npm and npx

### npm

npm is a package manager used to install dependencies.

### Example

```bash
npm install react-native
```

### npx

npx executes packages without installing them globally.

### Example

```bash
npx react-native init MyApp
```

### Differences

| npm                            | npx                                |
| ------------------------------ | ---------------------------------- |
| Installs packages              | Executes packages                  |
| Adds dependency to project     | No permanent installation required |
| Used for dependency management | Used for running commands          |

### Interview Definition

npm is used for package management, whereas npx is used for executing packages directly without globally installing them.

---

## 24. What is the New React Native Architecture?

### Components

#### Fabric

New rendering system.

Benefits:

* Faster rendering
* Better UI performance
* Synchronous rendering support

#### TurboModules

Improved native module system.

Benefits:

* Lazy loading
* Faster startup
* Reduced memory usage

#### JSI (JavaScript Interface)

Allows JavaScript to communicate directly with native code without using the traditional bridge.

### Benefits

* Improved performance
* Faster startup time
* Reduced bridge overhead
* Better memory management

### Interview Definition

The New React Native Architecture consists of Fabric, TurboModules, and JSI, which improve performance, startup time, and communication between JavaScript and native code.

---

## 25. How Do You Manage Application Versions?

### Versioning

#### Android

```gradle
versionCode 10
versionName "1.0.0"
```

#### iOS

```text
CFBundleVersion
CFBundleShortVersionString
```

### Semantic Versioning

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.2.3
```

* Major → Breaking changes
* Minor → New features
* Patch → Bug fixes

### Version Control Tools

* Git
* GitHub
* GitLab
* Bitbucket

### Interview Definition

Application versioning helps track releases and updates using semantic versioning and platform-specific version identifiers.

---

## 26. How Do You Secure a React Native Application?

### Best Practices

#### Secure API Communication

Use HTTPS only.

#### Store Sensitive Data Securely

Use:

* Keychain (iOS)
* Keystore (Android)

Libraries:

```text
react-native-keychain
```

#### Avoid Storing Secrets

Never store:

* API Keys
* Tokens
* Credentials

Inside source code.

#### Certificate Pinning

Prevents Man-in-the-Middle attacks.

#### Obfuscation

Makes reverse engineering difficult.

Android:

```text
ProGuard / R8
```

### Interview Definition

Application security involves protecting sensitive data, securing network communication, using encrypted storage, and preventing reverse engineering.

---

## 27. What is Native Bridging?

### Answer

Native Bridging allows JavaScript code to communicate with native Android and iOS code.

### Flow

```text
JavaScript
    ↓
React Native Bridge
    ↓
Native Module
```

### Example Use Cases

* Camera
* Bluetooth
* GPS
* Biometrics
* Native SDKs

### Example

```javascript
NativeModules.CameraModule.openCamera();
```

### New Architecture

With JSI and TurboModules, communication can happen directly without the traditional bridge.

### Interview Definition

Native Bridging enables communication between JavaScript and native platform code to access device-specific functionality.

---

## 28. How Do Push Notifications Work?

### Types

#### Local Notifications

Triggered by the application itself.

#### Remote Notifications

Sent from a backend server.

### Flow

```text
Backend
 ↓
Firebase Cloud Messaging (FCM)
 ↓
Device
 ↓
Application
```

### Common Libraries

* Firebase Cloud Messaging (FCM)
* Notifee

### Typical Steps

1. Request permission
2. Generate device token
3. Send token to backend
4. Backend sends notification
5. App receives notification

### Interview Definition

Push notifications allow applications to deliver messages to users even when the app is closed or running in the background.

---

## 29. Deep Copy vs Shallow Copy

### Shallow Copy

Copies only the first level.

```javascript
const obj1 = {
  user: {
    name: "John"
  }
};

const obj2 = { ...obj1 };

obj2.user.name = "Mike";

console.log(obj1.user.name);
```

Output:

```text
Mike
```

Both objects reference the same nested object.

---

### Deep Copy

Creates completely independent copies.

```javascript
const obj2 = structuredClone(obj1);
```

Or:

```javascript
const obj2 = JSON.parse(JSON.stringify(obj1));
```

### Output

```text
Changing obj2 does not affect obj1
```

### Differences

| Shallow Copy             | Deep Copy                  |
| ------------------------ | -------------------------- |
| Copies first level only  | Copies all nested levels   |
| Shares nested references | Creates independent copies |
| Faster                   | More expensive             |

### Interview Definition

A shallow copy duplicates only the top-level properties, while a deep copy recursively copies all nested objects and arrays.

---

## 30. Difference Between null and undefined

### undefined

Represents a variable that has been declared but not assigned a value.

```javascript
let name;

console.log(name);
```

Output:

```text
undefined
```

---

### null

Represents the intentional absence of a value.

```javascript
let user = null;
```

### Type Check

```javascript
typeof undefined;
```

Output:

```text
"undefined"
```

```javascript
typeof null;
```

Output:

```text
"object"
```

(JavaScript historical bug)

### Differences

| null                    | undefined              |
| ----------------------- | ---------------------- |
| Intentional empty value | Value not assigned     |
| Assigned by developer   | Assigned by JavaScript |
| Type is object          | Type is undefined      |

### Interview Definition

`undefined` means a variable has been declared but not assigned a value, whereas `null` is an intentional assignment representing the absence of a value.
