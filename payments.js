
// Direct Creator Payment Processing
class CreatorPayments {
    constructor() {
        this.creatorName = 'Taylor Phoenix';
        this.creatorEmail = 'river@riverblackwood.com';
    }
    
    processPayment(bookId, amount) {
        // Direct payment to creator - no middleman
        console.log(`Processing ${amount} payment directly to ${this.creatorName}`);
        
        // Integrate with Stripe, PayPal, crypto, etc.
        // Creator keeps 100% minus payment processing fees
        
        alert('Payment processed directly to creator. No corporate middleman!');
    }
    
    downloadPurchasedBook(bookId) {
        // Immediate download after payment
        console.log('Downloading purchased book:', bookId);
    }
}

const creatorPayments = new CreatorPayments();
