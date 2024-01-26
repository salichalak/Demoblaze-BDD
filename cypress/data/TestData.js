class TestData {
    username = `UserTestDummy${this.generateRandomNumber()}`;
    password = `Pass${this.generateRandomNumber()}`;
    userSignedUpMessage = "Sign up successful.";
    addedToCartMessage = "Product added";

    userPaymentData = {
        name: "Sali Chalak",
        country: "Bulgaria",
        city: "Varna",
        creditCard: "123456789",
        month: "1",
        year: "2024"
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 1000000);
    }
}

export default new TestData();