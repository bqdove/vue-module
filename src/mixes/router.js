export default function (injection) {
    injection.useModuleRoute([
        {
            children: [
            ],
            component: Layout,
            path: '/content',
        },
    ]);
}