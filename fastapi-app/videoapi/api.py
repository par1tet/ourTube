import innertube
import json

client = innertube.InnerTube("WEB")

def getResponse(query):
    data = (client.search(query=query))["contents"]["twoColumnSearchResultsRenderer"]["primaryContents"]["sectionListRenderer"]["contents"][0]["itemSectionRenderer"]["contents"]
    
    response = []
    
    for i in data:
        dataType = list(i.keys())[0]
        if not (dataType == 'channelRenderer' or dataType == 'videoRenderer' or dataType == 'playlistRenderer'):
            continue
        response.append({
            "dataType":dataType,
            "url":f"https://www.youtube.com{i[dataType]['navigationEndpoint']['commandMetadata']['webCommandMetadata']['url']}"
        })
    return response
