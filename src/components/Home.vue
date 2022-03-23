<template>
    <b-container>
        <h2>Create Card Form</h2>
        <b-form @submit="onSubmit">
            <b-form-group
                id="first_name"
                label-for="first_name"
            >
            <b-form-input
                id="first_name"
                v-model="createCardForm.first_name"
                type="text"
                placeholder="Enter first name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="last_name"
                label-for="last_name"
            >
            <b-form-input
                id="last_name"
                v-model="createCardForm.last_name"
                type="text"
                placeholder="Enter last name"
                required
                ></b-form-input>
            </b-form-group>
            
            <b-form-group label="Membership Tier:">
                <b-form-radio v-model="selected"  name="membership_tier" id="gold" value="gold">Gold</b-form-radio>
                <b-form-radio v-model="selected"  name="membership_tier" id="silver" value="silver">Silver</b-form-radio>
                <b-form-radio v-model="selected"  name="membership_tier" id="platinium" value="platinium">Platinium</b-form-radio>
            </b-form-group>

            <b-form-textarea
                id="description"
                v-model="createCardForm.description"
                placeholder="Enter Description..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>

            <br>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </b-container>
</template>


<script>
export default {
    name: 'Home',
    data() {
        return {
            selected: "gold",
            createCardForm: {
                first_name:null,
                last_name:null,
                membership_tier:null,
                description:null
            }
        }
    },
    methods:{
        onSubmit(event){
            event.preventDefault()
            this.$router.push('/cards')
        }
    }
}
</script>