module addr::User{

    use std::signer;
    use std::vector;
    
    struct UserInfo has key{
        wallet: address,
        ticket: vector<address>,
        ownsEvents: vector<address>,
        sellingTicket:vector<address>
    }

    public entry fun addUser(account: &signer){
        let user_addr = signer::address_of(account);

        let alreadyExists = exists<UserInfo>(user_addr);
        if(!alreadyExists){
            move_to(account, UserInfo {
                wallet: user_addr,
                ticket: vector::empty<address>(),
                ownsEvents: vector::empty<address>(),
                sellingTicket: vector::empty<address>()
            });
        }
    }

    public entry fun addTicket(user: &signer, newTicket: address) acquires UserInfo{
        let account = borrow_global_mut<UserInfo>(signer::address_of(user));
        vector::push_back(&mut account.ticket, newTicket);
    }

    public entry fun addEvent(user: &signer, newEvent: address) acquires UserInfo{
        let account = borrow_global_mut<UserInfo>(signer::address_of(user));
        vector::push_back(&mut account.ownsEvents, newEvent);
    }

    public entry fun addSellingTicket(user: &signer, newSell: address) acquires UserInfo{
        let account = borrow_global_mut<UserInfo>(signer::address_of(user));
        vector::push_back(&mut account.sellingTicket, newSell);
    }

}