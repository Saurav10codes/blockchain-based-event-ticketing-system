export async function getTickets() {
    return [
      { id: "1", name: "Tech Conference", description: "A conference on AI and Blockchain.", price: 5 },
      { id: "2", name: "Music Fest", description: "A live concert with top artists.", price: 3 },
      { id: "3", name: "Startup Pitch", description: "Meet investors and showcase your ideas.", price: 7 }
    ];
  }
  
  export async function getTicketDetails(id: string) {
    const tickets = await getTickets();
    return tickets.find(ticket => ticket.id === id) || null;
  }
  
  export async function purchaseTicket(id: string) {
    alert(`Ticket with ID ${id} purchased successfully!`);
  }
  
  export async function resellTicket(id: string) {
    alert(`Ticket with ID ${id} is now listed for resale.`);
  }
  