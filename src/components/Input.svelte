<script>
    export let required = false;
    export let name = ""
    export let id = ""
    export let innerClass = ""
    export let placeholder = ""
    export let value;
</script>

<input {name} {id} {placeholder} class={innerClass + " " + (required ? "required" : "")} type="text" bind:value="{value}">

<style>
    input[type="text"] {
        width: 100%;
        padding: 10px 10px;
        border: 1px solid #e87461;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #e9f1f7;
        color: #131b23;
        transition: all 0.3s ease;
}

input[type="text"]:focus {
    outline: none;
}

    
    .required {
        background-color: red;
    }
</style>