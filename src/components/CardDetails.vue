<template>
    <div>
        <h2>Card Details</h2>
        <table class="table table-striped table-bordered">
            <tbody>
                <tr><td>Card Number</td><td>{{card.card_number}}</td></tr>
                <tr><td>First Name</td><td>{{card.first_name}}</td></tr>
                <tr><td>Last Name</td><td>{{card.last_name}}</td></tr>
                <tr><td>Membership Tier</td><td>{{card.membership_tier}}</td></tr>
            </tbody>
        </table>
    </div>
</template>


<script>

export default {
    name: 'CardDetails',
    data() {
        return {
            card: {
                card_number: '4444-1000-2000-1000',
                first_name: 'Jose',
                last_name: 'Rizal',
                membership_tier: 'gold'
            }
        }
    }
}
</script>