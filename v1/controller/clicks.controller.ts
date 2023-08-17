import Click from "../../models/models/click"
import ShortenedLink from "../../models/models/link"
import { Op } from "sequelize"

const getClicksForUrl = async (req, res) => {
    try {
        if (!req.params.ID) {return res.status(400).json({message:"No URL ID (or code) was provided."})}

        let url = await ShortenedLink.findOne({where:{[Op.or]: [
            {id:req.params.ID},
            {urlCode:req.params.ID}
        ]}, include:Click})

        if (!url) {return res.status(400).json({message:"The requested URL was not found"})}

        res.status(200).json({message:`Clicks`, url:{id:url.id, code:url.urlCode, longLink:url.originLink}, clicks:url["Clicks"]})
    } catch (e) {
        res.status(500).json({message:e.message})
    }
}

const getClickCount = async (req, res) => {
    try {
        if (!req.params.ID) {return res.status(400).json({message:"No URL ID (or code) was provided."})}

        let url = await ShortenedLink.findOne({where:{[Op.or]: [
                {id:req.params.ID},
                {urlCode:req.params.ID}
            ]}, 
            include: [{model:Click, as:"Clicks"}]
        })

        if (!url) {return res.status(400).json({message:"The requested URL was not found"})}

        res.status(200).json({message:`Clicks`, url:{id:url.id, code:url.urlCode, longLink:url.originLink}, count:url["Clicks"].length})
    } catch (e) {
        console.log(e)
        res.status(500).json({message:e.message})
    }
}

export {getClicksForUrl, getClickCount}