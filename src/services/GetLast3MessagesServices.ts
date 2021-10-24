import prismaClient from "../prisma";


class GetLast3MessagesService {
  async execute(){
    const messages = await prismaClient.message.findMany({
      take:3,
      orderBy:{
        created_at:"desc",
      },
      include:{
        user:true,
      },
    });

    //Select * From messages limit 3 ord by created 
    
    return messages;
  }
}

export {GetLast3MessagesService};