export { default as TodoForm } from "./TodoForm";
export { default as TodoItem } from "./TodoItem";

/*
Importing components in App.jsx

With index.js (Clean & Scalable)
import { TodoForm, TodoItem, TodoList, Button, Card } from "./components";

Without index.js (Bad for large apps) 
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import Card from "./components/Card";
*/