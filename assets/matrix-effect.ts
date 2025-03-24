export function startMatrixEffect() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) {
        console.error("❌ Matrix Canvas non trouvé !");
        return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("❌ Erreur : Impossible d'obtenir le contexte 2D du canvas.");
        return;
    }

    let columns: number = 0;
    let drops: number[] = [];
    const chars: string = "01X∑ΩπΔΛΦΣ";

   function resizeCanvas() {
       canvas.width = window.innerWidth;
       // Prendre la plus grande hauteur entre la fenêtre et le document
       const pageHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
       canvas.height = pageHeight;
       columns = Math.floor(canvas.width / 15);
       drops = new Array(columns).fill(0);
   }


    function drawMatrix(): void {
        if (!ctx) return;

        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = "18px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 15, drops[i] * 18);

            drops[i] = (drops[i] * 18 > canvas.height && Math.random() > 0.975) ? 0 : drops[i] + 1;
        }

        requestAnimationFrame(drawMatrix);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    requestAnimationFrame(drawMatrix);
}
