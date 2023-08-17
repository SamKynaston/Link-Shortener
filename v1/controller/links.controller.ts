import Click from "../../models/models/click"
import ShortenedLink from "../../models/models/link"

const redirectLink = async (req, res) => {
    try {
        let link = await ShortenedLink.findOne({where:{urlCode:req.params.ID}})
        
        if (!req.params.ID || !link) {return res.status(404).json({message:"The requested link was not found."})}

        Click.create({
            "urlID":link.id,
            "clientIP": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            "clientUserAgent": req["user-agent"],
        })

        res.redirect(307, link.originLink)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
}

const createLink = async (req, res) => {
    try {
        req.body.authorID = req.authUser.id
        const newLink = await ShortenedLink.create(req.body)
        res.status(201).json({message:"The requested link was created"})
    } catch (e) {
        res.status(500).json({message:e.message})
    }
}

const editLink = async (req, res) => {
    try {
        for (var x in req.body.update) {
            if (x !== "id" && x !== "createdAt" && x !== "updatedAt") {
                await ShortenedLink.update({
                    [x]: req.body.update[x]
                }, {where:{id:req.body.id}})
            }
        }

        return res.status(200).json({message:"The requested link's details have been updated", body:{id:req.authUser.id}})
    } catch (e) {
        res.status(500).json({message:e.message})
    }
}

const deleteLink = async (req, res) => {
    try {
        let link = await ShortenedLink.findOne({where:{id:req.body.id}})

        if (!link) {return res.status(404).json({message:"The requested link not found"})}

        link.destroy()

        return res.status(200).json({message:"The requested link has been deleted", body:{id:req.authUser.id}})
    } catch (e) {
        res.status(500).json({message:e.message})
    }
}

export {redirectLink, createLink, editLink, deleteLink}