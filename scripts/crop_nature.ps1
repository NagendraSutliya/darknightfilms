[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

$srcPath = "C:\Users\Dell\.gemini\antigravity-ide\brain\cdbdab5e-31c0-4623-8b69-d470b3840d50\nature_teaser_playback_1792088753534.png"
if (Test-Path $srcPath) {
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    Write-Host "Screenshot size: $($src.Width)x$($src.Height)"
    
    # In full browser screenshot, the video element is in the center
    # Let's crop the video area
    $cropRect = New-Object System.Drawing.Rectangle(200, 100, [int]($src.Width - 400), [int]($src.Height - 200))
    $dest = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.DrawImage($src, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $dest.Save("d:\GitHub\darknightfilms\public\nature_still.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Host "Saved nature_still.jpg successfully"
} else {
    Write-Host "Source screenshot not found, copying motorcycle_still.jpg"
    Copy-Item "d:\GitHub\darknightfilms\public\motorcycle_still.jpg" "d:\GitHub\darknightfilms\public\nature_still.jpg"
}
