import { DbUser } from './db-user';

export const USERS: {[key: number]: DbUser} = {}

export const BOOKS = {

    1: {
        id: 1,
        "description": "Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step",
        "longDescription": "<p>This is step by step guide to create your first  application. <b>Its aimed at beginners</b> just starting out with the framework.This lesson will show how to create a component, and how to link the component to a given custom HTML tag. It will show how to give the component a given template.</p>",
        "tags": "BEGINNER",
        "price": 23.99,
    },
    2: {
        id: 2,
        "description": "Building Your First  Component - Component Composition",
        "longDescription": "<p>In this lesson we are going to see how to include a component inside another component. We are going to create a simple search box component and include it in our main application.</p>",
        "tags": "BEGINNER",
        "price": 13.29,
    },
    3: {
        id: 3,
        "description": "Component @Input - How To Pass Input Data To an  Component",
        "longDescription": "<p>In this lesson we are going to learn how to use the  template syntax for properties, and learn how we can use it to pass input data to a component. We are going to see also a simplified input syntax for passing constant strings as component inputs.</p>",
        "tags": "BEGINNER",
        "price": 18.09,
    },
    4: {
        id: 4,
        "description": " Component Events - Using @Output to create custom events",
        "longDescription": "<p>In this lesson we are going to see how components can emit custom events via EventEmitter and the @Output decorator. We are going to see how we can subscribe to standard browser events, and how the syntax for that is exactly the same as in the case of custom component events. We will also learn how Typescript literals can be used to output variables inside template strings.</p>",
        "tags": "BEGINNER",
        "price": 30.00,
    },
    5: {
        id: 5,
        "description": " Component Templates - Inline Vs External",
        "longDescription": "<p>In this lesson we are going to learn how a component template can be defined both inline and in an external file. We are going to learn how to configure the component so that Angular can find the template at the correct location, using the module commonjs variable. We are going to learn also some best practices for component naming, from the official  Style Guide.</p>",
        "tags": "BEGINNER",
        "price": 22.11,
    },
    6: {
        id: 6,
        "description": "Styling  Components - Learn About Component Style Isolation",
        "longDescription": "<p>In this lesson we are going to learn how components can be styled using both inline styles and an external css file. We will learn some more best practices on file naming. We will learn how the mechanism for style isolation works in.</p>",
        "tags": "BEGINNER",
        "price": 88.30,
    },
    7: {
        id: 7,
        "description": " Component Interaction - Extended Components Example",
        "longDescription": "<p>In this lesson we are going to put together all that we have learned so far about components to create a more complex example. We are going to create two components: a color picker and a color previewer and see how they can interact.</p>",
        "tags": "BEGINNER",
        "price": 21.99,
    },
    8: {
        id: 8,
        "description": " Components Tutorial For Beginners - Components Exercise !",
        "longDescription": "<p>In this video we are going to present an exercise for putting in practice the several concepts that we have learned so far about components.</p>",
        "tags": "BEGINNER",
        "price": 32.29,
    },
    9: {
        id: 9,
        "description": " Components Tutorial For Beginners - Components Exercise Solution Inside",
        "longDescription": "<p>This video contains the solution for the introduction to components exercise.</p>",
        "tags": "BEGINNER",
        "price": 22.19,
    },
    10: {
        id: 10,
        "description": " Directives - Inputs, Output Event Emitters and How To Export Template References",
        "longDescription": "<p>Components are actually simply just Directives. All the functionality that we have learned so far about Components also applies to Directives. In this lesson we are going to learn how to Directives can also have inputs and outputs, and how the use of the decorators @Input and @Output also applies to directives. We are also learn a new functionality for exporting a template reference for the directive itself into the template on which the directive is being used.</p> ",
        "tags": "BEGINNER",
        "price": 44.99,
    }

};