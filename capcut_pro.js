const response = {
    "status": 0,
    "message": "Success",
    "data": {
        "is_pro": true,
        "subscription_expiry": "2099-12-31T23:59:59Z",
        "features": [
            "no_ads", 
            "4k_export", 
            "premium_assets", 
            "remove_watermark", 
            "unlock_templates", 
            "unlock_filters", 
            "vip_effects", 
            "hd_export", 
            "pro_stickers", 
            "ai_background_removal", 
            "premium_fonts", 
            "music_library_access"
        ]
    }
};

$done({body: JSON.stringify(response)});
