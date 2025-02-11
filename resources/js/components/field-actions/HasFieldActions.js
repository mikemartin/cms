import FieldAction from './FieldAction';

export default {

    computed: {

        fieldActions() {
            return [
                ...this.$fieldActions.get(this.$options.name),
                ...this.internalFieldActions
            ]
            .map(action => new FieldAction(action, this.fieldActionPayload))
            .filter(action => action.visible);
        },

        internalFieldActions() {
            return [
                {
                    title: 'Revert to Default',
                    run: ({ config, update }) => {
                        update(config.default);
                    },
                    visible: this.config.default,
                }
            ];
        },

        fieldActionPayload() {
            return {};
        },

    }

}
