{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "xapi-microsite-v2.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "xapi-microsite-v2.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "xapi-microsite-v2.resource.prefix" -}}
{{- "xapi-microsite-v2" }}
{{- end -}}
