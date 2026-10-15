[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

function Resize-Image {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$TargetWidth = 1920,
        [long]$Quality = 85
    )

    $src = [System.Drawing.Bitmap]::FromFile($InputPath)
    $ratio = $TargetWidth / $src.Width
    $targetHeight = [int]($src.Height * $ratio)

    $dest = New-Object System.Drawing.Bitmap($TargetWidth, $targetHeight)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.DrawImage($src, 0, 0, $TargetWidth, $targetHeight)

    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)

    $dest.Save($OutputPath, $jpegCodec, $encoderParams)

    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Host "Resized $InputPath -> $OutputPath"
}

Resize-Image -InputPath "d:\GitHub\darknightfilms\public\Maternity\DRK08381 copy.jpg" -OutputPath "d:\GitHub\darknightfilms\public\maternity_1.jpg"
Resize-Image -InputPath "d:\GitHub\darknightfilms\public\Maternity\DRK08453 copy.jpg" -OutputPath "d:\GitHub\darknightfilms\public\maternity_2.jpg"
Resize-Image -InputPath "d:\GitHub\darknightfilms\public\Maternity\DRK08482 copy.jpg" -OutputPath "d:\GitHub\darknightfilms\public\maternity_3.jpg"
