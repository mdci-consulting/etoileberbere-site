export function startMatrixEffect(): () => void {
    if (typeof document === 'undefined' || typeof window === 'undefined') return () => {};

    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return () => {};

    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {};

    let columns: number = 0;
    let drops: number[] = [];
    const chars: string = "01X∑ΩπΔΛΦΣ";
    let animationId: number = 0;
    let paused = false;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        const pageHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
        canvas.height = pageHeight;
        columns = Math.floor(canvas.width / 15);
        drops = new Array(columns).fill(0);
    }

    function drawMatrix(): void {
        if (!ctx || paused) return;

        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = "18px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 15, drops[i] * 18);
            drops[i] = (drops[i] * 18 > canvas.height && Math.random() > 0.975) ? 0 : drops[i] + 1;
        }

        animationId = requestAnimationFrame(drawMatrix);
    }

    function onVisibilityChange() {
        if (document.hidden) {
            paused = true;
            cancelAnimationFrame(animationId);
        } else {
            paused = false;
            animationId = requestAnimationFrame(drawMatrix);
        }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", onVisibilityChange);
    animationId = requestAnimationFrame(drawMatrix);

    return () => {
        paused = true;
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resizeCanvas);
        document.removeEventListener("visibilitychange", onVisibilityChange);
    };
}
