export async function readableStream(req: any) {
    const reader = req.body.getReader();
    const stream = new ReadableStream({
        start(controller) {
        return pump();

        function pump() {
            return reader.read().then(({ done, value }) => {
            if (done) {
                controller.close();
                return;
            }

            controller.enqueue(value);
            return pump();
            });
        }
        }
    });
    const blob = await new Response(stream).blob();
    return await blob.text();
}