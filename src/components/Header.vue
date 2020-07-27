<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand disabled>Language Learning App</b-navbar-brand>
            <b-navbar-nav>
                <b-nav-item disabled light > Correct: {{numCorrect}}/{{numTotal}}</b-nav-item>
            </b-navbar-nav>

        </b-navbar>
    </div>
</template>

<script>
export default {
    props:[
        'numCorrect',
        'numTotal'
    ]
}
</script>