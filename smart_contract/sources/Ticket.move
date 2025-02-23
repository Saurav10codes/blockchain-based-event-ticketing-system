module addr::Ticket{
    use std::vector;
    use std::string::String;
    use std::signer;

    struct Ticket has key{
        owner: address,
        buyers: vector<address>,
        price: u8,
        eventName: String,
        eventDate: String,
        eventVenue: String,
        eventDes: String
    }

    public entry fun createTicket(
        owner: &signer,
        price: u8,
        eventName: String,
        eventDate: String,
        eventVenue: String,
        eventDes: String,
    ){
        let acc_addr = signer::address_of(owner);
        move_to(owner, Ticket {
            owner: acc_addr,
            buyers: vector::empty<address>(),
            price: price,
            eventName: eventName,
            eventDate: eventDate,
            eventVenue: eventVenue,
            eventDes: eventDes
        });
    }
}