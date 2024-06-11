<script>
    import Input from "../components/Input.svelte";
    import logo from "/fiatlinux-red.svg"
    import { login } from "../lib/auth.js"
    import { validate } from "../lib/validation.js"

    let email;
    let password;

</script>

<main>
    <img src={logo} alt="">
    <h1>Log in or sign up</h1>
    <form on:submit|preventDefault={() => {
        if(validate(email, "email") && validate(password, "password")) {
            login(email, password);
        }
    }}>
        <!--
            <div>
                <label for="username">Username</label>
                <Input name="username" placeholder="johndoe"></Input>
            </div>
        -->
        <div>
            <label for="email">Email</label>
            <Input id="email" name="email" placeholder="john.doe@fiatlnux.it" bind:value={email} required></Input>
        </div>
        <div>
            <label for="password">Password</label>
            <Input id="password" name="password" placeholder="************" bind:value={password} required autocomplete="off"></Input>
            <p>Password must be at least 8 characters, must contain an uppercase letter, number and special char</p>
        </div>
        <button>Continue</button>
    </form>
</main>

<style>

    img {
        width: 71px;
    }

    p {
        font-size: 10px;
    }
    main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 30%;
        gap: 20px;
    }

    button {
        padding: 10px 20px;
        border: none;
        background-color: #e87461;
        border-radius: 5px;
        margin: 20px 0;
        cursor: pointer;
        color: #e9f1f7;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: .3s;
    }

    button:hover {
        background-color: #ca6151;
    }

</style>